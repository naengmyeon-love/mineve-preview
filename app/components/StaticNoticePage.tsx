import { Breadcrumb } from "./Breadcrumb";
import { SectionHeading } from "./SectionHeading";

export function StaticNoticePage({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <main className="utility-page page-shell">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: title }]} />
      <SectionHeading eyebrow={eyebrow} title={title} description={description} level="h1" />
      <div className="static-notice" data-reveal>
        <p>현재 대표 검토를 위한 정적 프로토타입입니다.</p>
        <p>실제 서비스 정책과 외부 시스템이 확정된 뒤 이 화면의 기능과 세부 내용을 연결합니다.</p>
      </div>
    </main>
  );
}
