import type { Metadata } from "next";
import { CollectionPage } from "../../components/BrandUI";
export const metadata: Metadata = { title: "REST", description: "낮과 저녁의 리듬을 채우는 미네랄." };
export default function Page() { return <CollectionPage lineId="rest" />; }
