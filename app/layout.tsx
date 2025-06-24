import "./globals.css";

export const metadata = {
  title: "便當共享平台",
  description: "分享你多煮的便當給附近的人",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
