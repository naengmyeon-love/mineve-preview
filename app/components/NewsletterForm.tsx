"use client";

import { FormEvent, useState } from "react";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
      <label htmlFor="newsletter-email">Email address</label>
      <div>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          required
          disabled={submitted}
        />
        <button type="submit" disabled={submitted}>
          {submitted ? "Thank you" : "Subscribe"}
        </button>
      </div>
      <p aria-live="polite">
        {submitted
          ? "입력해 주셔서 감사합니다."
          : "새로운 Notes와 MINEVE의 소식을 천천히 전합니다."}
      </p>
    </form>
  );
}
