import type { Metadata } from "next";
import { LinePage } from "../components/LinePage";

export const metadata: Metadata = { title: "MINEVE REST — Magnesium Wellness", description: "낮과 저녁의 서로 다른 시간에 맞춘 미네랄 웰니스 루틴" };
export default function RestPage() { return <LinePage lineId="rest" />; }

