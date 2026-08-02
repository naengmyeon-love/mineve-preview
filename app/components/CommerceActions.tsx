"use client";

import { useState } from "react";
import Link from "next/link";

export function CommerceActions({ product }: { product: { slug: string; name: string } }) {
  const [added, setAdded] = useState(false);
  const [quantity, setQuantity] = useState("1");

  const add = () => {
    const item = { slug: product.slug, name: product.name, quantity: Number(quantity) };
    localStorage.setItem("mineve-cart", JSON.stringify([item]));
    setAdded(true);
  };

  return (
    <>
      <label htmlFor="quantity">수량</label>
      <select id="quantity" value={quantity} onChange={(event) => setQuantity(event.target.value)}>
        <option value="1">1</option><option value="2">2</option><option value="3">3</option>
      </select>
      <div className="purchase-actions">
        <button className="purchase-button purchase-button--outline" type="button" onClick={add}>{added ? "장바구니에 담았습니다" : "장바구니 담기"}</button>
        <Link prefetch={false} className="purchase-button" href={`/cart?product=${product.slug}&quantity=${quantity}`}>바로 구매</Link>
      </div>
      <p className="purchase-note" role="status">{added ? "오른쪽 위 Bag에서 선택한 제품을 확인할 수 있습니다." : "3만원 이상 무료 배송"}</p>
    </>
  );
}
