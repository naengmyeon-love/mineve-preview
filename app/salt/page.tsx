import type { Metadata } from "next";
import { LinePage } from "../components/LinePage";

export const metadata: Metadata = { title: "MINEVE SALT — Jeju Mineral Salt", description: "제주의 미네랄 원천을 식탁의 감각으로 이어가는 네 가지 솔트 컬렉션" };
export default function SaltPage() { return <LinePage lineId="salt" />; }

