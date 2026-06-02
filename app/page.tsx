import "./globals.css";

export default function Home() {
  const domain = "shenmeshihoukaishi.vercel.app";
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
        <h1>2026 世界杯赛程</h1>
        <p className="subtitle">一键订阅到你的日历，自动同步最新赛程</p>
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
        <div className="stat">
          <div className="stat-number">39</div>
          <div className="stat-label">天赛期</div>
        </div>
      </div>

      <div className="features">
        <div className="feature">
          <div className="feature-icon">🌍</div>
          <div className="feature-text">自动适配你的时区</div>
        </div>
        <div className="feature">
          <div className="feature-icon">🔔</div>
          <div className="feature-text">开球前30分钟提醒</div>
        </div>
        <div className="feature">
          <div className="feature-icon">🔄</div>
          <div className="feature-text">淘汰赛对阵自动更新</div>
        </div>
      </div>

      <div className="buttons">
        <a href={webcalUrl} className="btn btn-ios">
          <span className="btn-icon">📱</span>
          iPhone / iPad 一键订阅
        </a>
        <a href={calendarUrl} className="btn btn-android">
          <span className="btn-icon">📅</span>
          Android / 其他设备下载
        </a>
      </div>

      <div className="info">
        <h3>📋 使用说明</h3>
        <ul>
          <li>
            iOS 用户点击上方按钮，在弹出的提示中选择「订阅」即可
          </li>
          <li>
            Android 用户下载 .ics 文件后，用 Google 日历打开
          </li>
          <li>
            订阅后日历会自动更新，淘汰赛对阵确定后无需手动操作
          </li>
          <li>
            如需取消，在日历 App 中找到「2026世界杯赛程」删除即可
          </li>
        </ul>
      </div>

      <div className="footer">
        <p>赛程数据来源于 FIFA 官方 · 时间均为当地比赛时间，自动转换为你的时区</p>
        <p style={{ marginTop: 8 }}>
          2026 FIFA World Cup™ · 美国 / 加拿大 / 墨西哥
        </p>
      </div>
    </div>
  );
}
