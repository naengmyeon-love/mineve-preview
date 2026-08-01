type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  level?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  level = "h2",
}: SectionHeadingProps) {
  const Heading = level;
  return (
    <header className={`section-heading section-heading--${align}`} data-reveal>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Heading>{title}</Heading>
      {description && <p className="section-heading__description">{description}</p>}
    </header>
  );
}
