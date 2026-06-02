import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "2026世界杯赛程 - 一键订阅到日历",
  description:
    "2026美加墨世界杯完整赛程，支持 iOS/Android 一键订阅，自动同步最新对阵和开球时间",
  openGraph: {
    title: "2026世界杯赛程 - 一键订阅到日历",
    description: "104场比赛完整赛程，自动适配你的时区，淘汰赛对阵实时更新",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
