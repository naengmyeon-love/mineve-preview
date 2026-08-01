type MediaPlaceholderProps = {
  label: string;
  ratio?: "21:9" | "16:9" | "4:5" | "4:3" | "3:4" | "1:1";
  tone?: "ocean" | "stone" | "sage" | "water" | "sand" | "charcoal";
  className?: string;
};

export function MediaPlaceholder({
  label,
  ratio = "16:9",
  tone = "stone",
  className = "",
}: MediaPlaceholderProps) {
  return (
    <div
      className={`media-placeholder media-placeholder--${tone} ${className}`}
      data-ratio={ratio}
      role="img"
      aria-label={`${label}. 실제 이미지 교체 예정`}
    >
      <span className="media-placeholder__mark" aria-hidden="true">M</span>
      <span className="media-placeholder__label">{label}</span>
    </div>
  );
}
