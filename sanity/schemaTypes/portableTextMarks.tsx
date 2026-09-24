import type {
  BlockAnnotationProps,
  BlockDecoratorProps,
} from "sanity";

export const TextDirectionIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 6h16M4 12h12M4 18h16" fill="none" stroke="currentColor" strokeWidth="1.75" />
    <path d="M20 9v6m0-6-2 2m2-2 2 2" fill="none" stroke="currentColor" strokeWidth="1.75" />
  </svg>
);

export const HighlightDecorator = ({ children }: BlockDecoratorProps) => (
  <mark
    style={{
      backgroundColor: "#f8c27a",
      borderRadius: "0.125rem",
      padding: "0 0.25rem",
    }}
  >
    {children}
  </mark>
);

export const SuperscriptDecorator = ({ children }: BlockDecoratorProps) => (
  <sup>{children}</sup>
);

export const SubscriptDecorator = ({ children }: BlockDecoratorProps) => (
  <sub>{children}</sub>
);

export const TextColorAnnotation = ({
  textElement,
  value,
}: BlockAnnotationProps) => {
  const color = (value as { color?: string }).color;

  return <span style={{ color }}>{textElement}</span>;
};

export const TextDirectionAnnotation = ({
  textElement,
  value,
}: BlockAnnotationProps) => {
  const direction = (value as { direction?: "left" | "center" | "right" })
    .direction;

  return (
    <span style={{ display: "block", textAlign: direction, width: "100%" }}>
      {textElement}
    </span>
  );
};
