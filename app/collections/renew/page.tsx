import type { Metadata } from "next";
import { CollectionPage } from "../../components/BrandUI";
export const metadata: Metadata = { title: "RENEW", description: "물 이후 피부를 위한 미네랄 리추얼." };
export default function Page() { return <CollectionPage lineId="renew" />; }
