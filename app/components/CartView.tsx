"use client";

import Link from "next/link";
import { useMemo, useSyncExternalStore } from "react";

type CartItem = { slug: string; name: string; quantity: number };

export function CartView() {
  const snapshot = useSyncExternalStore(
    () => () => undefined,
    () => localStorage.getItem("mineve-cart") ?? "[]",
    () => "[]",
  );
  const items = useMemo<CartItem[]>(() => {
    try {
      return JSON.parse(snapshot);
    } catch {
      return [];
    }
  }, [snapshot]);

  return (
    <main className="utility-page page-shell">
      <p className="kicker">Bag</p>
      <h1>Your selection</h1>
      {items.length ? (
        <div className="cart-list">
          {items.map((item) => (
            <div key={item.slug}>
              <div><strong>{item.name}</strong><span>수량 {item.quantity}</span></div>
              <Link prefetch={false} href={`/products/${item.slug}`}>제품 보기 ↗</Link>
            </div>
          ))}
          <a className="purchase-button" href="mailto:order@mineve.co.kr?subject=MINEVE 주문 문의">주문 문의</a>
        </div>
      ) : (
        <div className="cart-empty">
          <p>아직 담긴 제품이 없습니다. SALT, RENEW, REST에서 오늘의 리추얼을 골라보세요.</p>
          <Link prefetch={false} className="text-link" href="/shop">Shop 둘러보기 <span aria-hidden="true">↗</span></Link>
        </div>
      )}
    </main>
  );
}
