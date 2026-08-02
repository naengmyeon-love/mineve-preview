import type { Metadata } from "next";
import { CollectionPage } from "../../components/BrandUI";
export const metadata: Metadata = { title: "SALT", description: "한 꼬집 안에 놓인 제주의 미네랄." };
export default function Page() { return <CollectionPage lineId="salt" />; }
