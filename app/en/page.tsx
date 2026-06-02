import "../globals.css";
import { Countdown } from "../countdown";

export const metadata = {
  title: "2026 World Cup Schedule - Subscribe to Calendar",
  description: "Full 2026 FIFA World Cup schedule. One-click subscribe to your calendar with auto timezone conversion.",
};

export default function EnglishHome() {
  const domain = "shenmeshihoukaishi.ocean-luo1219.workers.dev";
  const calendarUrl = `https://${domain}/api/calendar/en`;
  const webcalUrl = `webcal://${domain}/api/calendar/en`;

  return (
    <div className="container">
      <div className="hero">
        <img
          src="/worldcup-logo-white.png"
          alt="FIFA World Cup 2026"
          className="hero-logo"
        />
        <Countdown lang="en" />
      </div>

      <div className="stats">
        <div className="stat">
          <div className="stat-number">104</div>
          <div className="stat-label">matches</div>
        </div>
        <div className="stat">
          <div className="stat-number">48</div>
          <div className="stat-label">teams</div>
        </div>
        <div className="stat">
          <div className="stat-number">16</div>
          <div className="stat-label">cities</div>
        </div>
      </div>

      <div className="buttons">
        <a href={webcalUrl} className="btn btn-primary">
          iPhone / iPad Subscribe
        </a>
        <a href={calendarUrl} className="btn btn-secondary">
          Android / Other Devices
        </a>
      </div>

      <div className="info">
        <h3>How to use</h3>
        <ul>
          <li>iOS: tap the button above and select "Subscribe"</li>
          <li>Android: download the .ics file, open with Google Calendar</li>
          <li>All times auto-convert to your local timezone</li>
        </ul>
      </div>

      <div className="footer">
        <p>Schedule data from FIFA official · 2026 FIFA World Cup™</p>
        <p style={{ marginTop: 12 }}><a href="/" className="lang-link">中文版</a></p>
      </div>
    </div>
  );
}
