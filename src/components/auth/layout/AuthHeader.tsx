import type React from "react";
import { Header } from "../../ui/Header";
import { Paragraph } from "../../ui/Paragraph";
import styles from "./AuthHeader.module.css";

type AuthHeaderProps = {
  hValue: string;
  pValue: string;
  className?: string;
};
export const AuthHeader: React.FC<AuthHeaderProps> = ({
  hValue,
  pValue,
  className,
}) => {
  return (
    <div className={className || styles.container}>
      <Header level={1} value={hValue} className={styles.title} />
      <Paragraph className={styles.subtitle}>{pValue}</Paragraph>
    </div>
  );
};
