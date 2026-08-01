import type { Metadata } from "next";
import { LinePage } from "../components/LinePage";

export const metadata: Metadata = { title: "MINEVE RENEW — Mineral Skincare", description: "미네랄 솔트와 보습 성분을 중심으로 설계한 바디 리추얼" };
export default function RenewPage() { return <LinePage lineId="renew" />; }

