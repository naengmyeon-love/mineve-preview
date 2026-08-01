import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found page-shell">
      <p className="eyebrow">404</p>
      <h1>이 페이지는 아직 흐름에 닿지 않았습니다.</h1>
      <p>주소를 다시 확인하거나 MINEVE의 시작으로 돌아가세요.</p>
      <Link href="/" className="button">Home으로 돌아가기</Link>
    </main>
  );
}

