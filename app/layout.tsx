import type { Metadata } from "next";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ScrollEffects } from "./components/ScrollEffects";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://naengmyeon-love.github.io/mineve-preview/"),
  title: { default: "MINEVE — Minerals through Jeju", template: "%s — MINEVE" },
  description: "제주의 미네랄을 식탁과 피부, 몸의 균형으로 이어가는 라이프스타일 브랜드 MINEVE.",
  keywords: ["MINEVE", "제주 미네랄", "미네랄 솔트", "바디 리추얼"],
  openGraph: {
    title: "MINEVE — Minerals through Jeju",
    description: "제주의 미네랄을, 매일의 균형으로.",
    images: [{ url: "https://naengmyeon-love.github.io/mineve-preview/og-mineve.png", width: 1731, height: 909, alt: "MINEVE — Minerals through Jeju" }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: { card: "summary_large_image", images: ["https://naengmyeon-love.github.io/mineve-preview/og-mineve.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        <a className="skip-link" href="#main-content">본문으로 바로가기</a>
        <Header />
        <div id="main-content">{children}</div>
        <Footer />
        <ScrollEffects />
      </body>
    </html>
  );
}
