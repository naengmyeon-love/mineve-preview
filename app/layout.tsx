import type { Metadata } from "next";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ScrollEffects } from "./components/ScrollEffects";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: {
    default: "MINEVE — Minerals through Jeju",
    template: "%s",
  },
  description: "제주 미네랄의 원천을 바탕으로 식탁, 피부, 몸의 균형을 제안하는 라이프케어 브랜드",
  keywords: ["MINEVE", "Jeju Mineral Salt", "Mineral Skincare", "Magnesium Wellness"],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "MINEVE",
    title: "MINEVE — Minerals through Jeju",
    description: "제주의 미네랄을, 매일의 균형으로.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MINEVE — Minerals through Jeju",
    description: "제주의 미네랄을, 매일의 균형으로.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href={`${basePath}/og.png`} />
        <meta property="og:image" content={`${basePath}/og.png`} />
        <meta name="twitter:image" content={`${basePath}/og.png`} />
      </head>
      <body>
        <a className="skip-link" href="#main-content">본문으로 바로가기</a>
        <Header />
        <div id="main-content" tabIndex={-1}>{children}</div>
        <Footer />
        <ScrollEffects />
      </body>
    </html>
  );
}
