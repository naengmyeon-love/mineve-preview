import type { Metadata } from "next";
import { CollectionPage } from "../../components/BrandUI";
export const metadata: Metadata = { title: "SALT", description: "식탁 위에 놓이는 제주의 미네랄." };
export default function Page() { return <CollectionPage lineId="salt" />; }
