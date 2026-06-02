import { NextResponse } from "next/server";
import { matches } from "../matches";

const teamNameEN: Record<string, string> = {
  "墨西哥": "Mexico", "南非": "South Africa", "韩国": "South Korea", "捷克": "Czechia",
  "加拿大": "Canada", "波黑": "Bosnia and Herzegovina", "卡塔尔": "Qatar", "瑞士": "Switzerland",
  "巴西": "Brazil", "摩洛哥": "Morocco", "海地": "Haiti", "苏格兰": "Scotland",
  "美国": "USA", "巴拉圭": "Paraguay", "澳大利亚": "Australia", "土耳其": "Turkiye",
  "德国": "Germany", "库拉索": "Curacao", "科特迪瓦": "Ivory Coast", "厄瓜多尔": "Ecuador",
  "荷兰": "Netherlands", "日本": "Japan", "瑞典": "Sweden", "突尼斯": "Tunisia",
  "伊朗": "Iran", "新西兰": "New Zealand", "比利时": "Belgium", "埃及": "Egypt",
  "西班牙": "Spain", "佛得角": "Cape Verde", "沙特阿拉伯": "Saudi Arabia", "乌拉圭": "Uruguay",
  "法国": "France", "塞内加尔": "Senegal", "伊拉克": "Iraq", "挪威": "Norway",
  "阿根廷": "Argentina", "阿尔及利亚": "Algeria", "奥地利": "Austria", "约旦": "Jordan",
  "葡萄牙": "Portugal", "刚果民主共和国": "DR Congo", "乌兹别克斯坦": "Uzbekistan", "哥伦比亚": "Colombia",
  "英格兰": "England", "克罗地亚": "Croatia", "加纳": "Ghana", "巴拿马": "Panama",
  "待定": "TBD",
  "A组亚军": "Runner-up A", "B组亚军": "Runner-up B", "C组亚军": "Runner-up C",
  "D组亚军": "Runner-up D", "E组亚军": "Runner-up E", "F组亚军": "Runner-up F",
  "G组亚军": "Runner-up G", "H组亚军": "Runner-up H", "I组亚军": "Runner-up I",
  "J组亚军": "Runner-up J", "K组亚军": "Runner-up K", "L组亚军": "Runner-up L",
  "A组冠军": "Winner A", "B组冠军": "Winner B", "C组冠军": "Winner C",
  "D组冠军": "Winner D", "E组冠军": "Winner E", "F组冠军": "Winner F",
  "G组冠军": "Winner G", "H组冠军": "Winner H", "I组冠军": "Winner I",
  "J组冠军": "Winner J", "K组冠军": "Winner K", "L组冠军": "Winner L",
  "最佳第三名": "Best 3rd Place",
};

const venueEN: Record<string, string> = {
  "阿兹特克体育场": "Estadio Azteca", "阿克伦体育场": "Estadio Akron",
  "梅赛德斯-奔驰体育场": "Mercedes-Benz Stadium", "BMO球场": "BMO Field",
  "李维斯体育场": "Levi's Stadium", "SoFi体育场": "SoFi Stadium",
  "BC体育馆": "BC Place", "流明球场": "Lumen Field",
  "大都会人寿体育场": "MetLife Stadium", "吉列体育场": "Gillette Stadium",
  "林肯金融球场": "Lincoln Financial Field", "硬石体育场": "Hard Rock Stadium",
  "NRG体育场": "NRG Stadium", "AT&T体育场": "AT&T Stadium",
  "BBVA体育场": "Estadio BBVA", "箭头体育场": "Arrowhead Stadium",
};

const cityEN: Record<string, string> = {
  "墨西哥城": "Mexico City", "瓜达拉哈拉": "Guadalajara", "蒙特雷": "Monterrey",
  "亚特兰大": "Atlanta", "多伦多": "Toronto", "旧金山": "San Francisco",
  "洛杉矶": "Los Angeles", "温哥华": "Vancouver", "西雅图": "Seattle",
  "纽约/新泽西": "New York/New Jersey", "波士顿": "Boston", "费城": "Philadelphia",
  "迈阿密": "Miami", "休斯顿": "Houston", "达拉斯": "Dallas", "堪萨斯城": "Kansas City",
};

const stageEN: Record<string, string> = {
  "小组赛": "Group Stage", "32强赛": "Round of 32", "16强赛": "Round of 16",
  "1/4决赛": "Quarterfinal", "半决赛": "Semifinal",
  "三四名决赛": "Third Place", "决赛": "Final",
};

function t(map: Record<string, string>, key: string): string {
  return map[key] ?? key;
}

function buildICS(): string {
  const lines: string[] = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//shenmeshihoukaishi//2026WorldCup//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "X-WR-CALNAME:2026 World Cup Schedule",
    "X-WR-TIMEZONE:America/New_York",
    "REFRESH-INTERVAL;VALUE=DURATION:PT6H",
    "X-PUBLISHED-TTL:PT6H",
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
    const team1 = t(teamNameEN, m.team1);
    const team2 = t(teamNameEN, m.team2);
    const venue = t(venueEN, m.venue);
    const city = t(cityEN, m.city);
    const stage = t(stageEN, m.stage);
    const groupLabel = m.group ? ` Group ${m.group}` : "";

    const summary = `${m.emoji} ${stage}${groupLabel}: ${team1} vs ${team2}`;
    const descParts = [`2026 World Cup ${stage}${groupLabel}`, `Venue: ${venue}`, `City: ${city}`, `Match: M${m.id}`];

    const endDate = m.endTime <= m.time ? incrementDate(m.date) : m.date;

    lines.push("BEGIN:VEVENT");
    lines.push(`DTSTART;TZID=America/New_York:${m.date}T${m.time}`);
    lines.push(`DTEND;TZID=America/New_York:${endDate}T${m.endTime}`);
    lines.push(`SUMMARY:${summary}`);
    lines.push(`DESCRIPTION:${descParts.join("\\n")}`);
    lines.push(`LOCATION:${venue}, ${city}`);
    lines.push(`UID:wc2026-m${String(m.id).padStart(2, "0")}@shenmeshihoukaishi`);
    lines.push("SEQUENCE:0");
    lines.push("STATUS:CONFIRMED");
    lines.push("BEGIN:VALARM");
    lines.push("TRIGGER:-PT30M");
    lines.push("ACTION:DISPLAY");
    lines.push(`DESCRIPTION:World Cup match starting soon: ${team1} vs ${team2}`);
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
  return `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, "0")}${String(date.getDate()).padStart(2, "0")}`;
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
