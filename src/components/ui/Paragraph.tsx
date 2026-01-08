import type React from "react";

type ParagraphProps = {
  children: React.ReactNode;
  className?: string;
};

export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  className,
}) => {
  return <p className={className}>{children}</p>;
};
