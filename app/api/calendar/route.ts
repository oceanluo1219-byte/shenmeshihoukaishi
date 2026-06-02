import { NextResponse } from "next/server";
import { matches } from "./matches";

function buildICS(): string {
  const lines: string[] = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//shenmeshihoukaishi//2026WorldCup//CN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "X-WR-CALNAME:2026世界杯赛程",
    "X-WR-TIMEZONE:America/New_York",
    "REFRESH-INTERVAL;VALUE=DURATION:PT6H",
    "X-PUBLISHED-TTL:PT6H",
    // Timezone definition
    "BEGIN:VTIMEZONE",
    "TZID:America/New_York",
    "BEGIN:DAYLIGHT",
    "TZOFFSETFROM:-0500",
    "TZOFFSETTO:-0400",
    "TZNAME:EDT",
    "DTSTART:19700308T020000",
    "RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU",
    "END:DAYLIGHT",
    "BEGIN:STANDARD",
    "TZOFFSETFROM:-0400",
    "TZOFFSETTO:-0500",
    "TZNAME:EST",
    "DTSTART:19701101T020000",
    "RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU",
    "END:STANDARD",
    "END:VTIMEZONE",
  ];

  for (const m of matches) {
    const groupLabel = m.group ? ` ${m.group}组` : "";
    const summary = `${m.emoji} ${m.stage}${groupLabel}: ${m.team1} vs ${m.team2}`;

    const descParts = [`2026世界杯 ${m.stage}${groupLabel}`];
    descParts.push(`场馆: ${m.venue}`);
    descParts.push(`城市: ${m.city}`);
    if (m.id === 1) descParts.push("比赛编号: M1（揭幕战）");
    else if (m.id === 104) descParts.push("比赛编号: M104（决赛）");
    else descParts.push(`比赛编号: M${m.id}`);

    const endDate =
      m.endTime <= m.time
        ? incrementDate(m.date)
        : m.date;

    lines.push("BEGIN:VEVENT");
    lines.push(`DTSTART;TZID=America/New_York:${m.date}T${m.time}`);
    lines.push(`DTEND;TZID=America/New_York:${endDate}T${m.endTime}`);
    lines.push(`SUMMARY:${summary}`);
    lines.push(`DESCRIPTION:${descParts.join("\\n")}`);
    lines.push(`LOCATION:${m.venue}, ${m.city}`);
    lines.push(`UID:wc2026-m${String(m.id).padStart(2, "0")}@shenmeshihoukaishi`);
    lines.push("SEQUENCE:0");
    lines.push("STATUS:CONFIRMED");
    lines.push("BEGIN:VALARM");
    lines.push("TRIGGER:-PT30M");
    lines.push("ACTION:DISPLAY");
    lines.push(`DESCRIPTION:世界杯比赛即将开始: ${m.team1} vs ${m.team2}`);
    lines.push("END:VALARM");
    lines.push("END:VEVENT");
  }

  lines.push("END:VCALENDAR");
  return lines.join("\r\n");
}

function incrementDate(dateStr: string): string {
  const y = parseInt(dateStr.slice(0, 4));
  const mo = parseInt(dateStr.slice(4, 6)) - 1;
  const d = parseInt(dateStr.slice(6, 8));
  const date = new Date(y, mo, d);
  date.setDate(date.getDate() + 1);
  const yy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yy}${mm}${dd}`;
}

export async function GET() {
  const ics = buildICS();
  return new NextResponse(ics, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'attachment; filename="worldcup2026.ics"',
      "Cache-Control": "public, max-age=21600",
    },
  });
}
