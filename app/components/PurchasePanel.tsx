"use client";

import { useState } from "react";

export function PurchasePanel({ productName }: { productName: string }) {
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  return (
    <div className="purchase-panel">
      <label htmlFor="quantity">Quantity</label>
      <div className="quantity-control">
        <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label="수량 줄이기">−</button>
        <output id="quantity" aria-live="polite">{quantity}</output>
        <button type="button" onClick={() => setQuantity((value) => value + 1)} aria-label="수량 늘리기">+</button>
      </div>
      <button
        type="button"
        className="button button--wide button--dark"
        onClick={() => setMessage(`${productName} ${quantity}개가 데모 장바구니에 담겼습니다.`)}
      >
        Add to cart
      </button>
      <p className="form-note" aria-live="polite">
        {message || "정적 검토용 화면으로 실제 주문이나 결제는 이루어지지 않습니다."}
      </p>
    </div>
  );
}

