import "./globals.css";
import { Countdown } from "./countdown";

export default function Home() {
  const domain = "shenmeshihoukaishi.ocean-luo1219.workers.dev";
  const calendarUrl = `https://${domain}/api/calendar`;
  const webcalUrl = `webcal://${domain}/api/calendar`;

  return (
    <div className="container">
      <div className="hero">
        <img
          src="/worldcup-logo-white.png"
          alt="FIFA World Cup 2026"
          className="hero-logo"
        />
        <Countdown />
      </div>

      <div className="stats">
        <div className="stat">
          <div className="stat-number">104</div>
          <div className="stat-label">场比赛</div>
        </div>
        <div className="stat">
          <div className="stat-number">48</div>
          <div className="stat-label">支球队</div>
        </div>
        <div className="stat">
          <div className="stat-number">16</div>
          <div className="stat-label">座城市</div>
        </div>
      </div>

      <div className="buttons">
        <a href={webcalUrl} className="btn btn-primary">
          iPhone / iPad 一键订阅
        </a>
        <a href={calendarUrl} className="btn btn-secondary">
          Android / 其他设备下载
        </a>
      </div>

      <div className="info">
        <h3>使用说明</h3>
        <ul>
          <li>微信内无法直接订阅，请点击右上角「⋯」选择在浏览器中打开</li>
          <li>iOS 用户点击上方按钮，选择「订阅」即可</li>
          <li>Android 用户下载 .ics 文件后，用 Google 日历打开</li>
        </ul>
      </div>

      <div className="footer">
        <p>赛程数据来源于 FIFA 官方 · 2026 FIFA World Cup™</p>
        <p style={{ marginTop: 12 }}><a href="/en" className="lang-link">English Version</a></p>
      </div>
    </div>
  );
}
