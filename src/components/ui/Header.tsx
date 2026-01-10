import type { JSX } from "react";
import type React from "react";
import styles from './Header.module.css';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
type HeaderProps = {
  level: HeadingLevel;
  value: string;
  className?: string;
};

export const Header: React.FC<HeaderProps> = ({ level, value, className }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag className={className}>{value}</Tag>;
};
