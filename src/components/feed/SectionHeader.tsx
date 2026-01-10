import React from "react";
import { type IconType } from "react-icons";
import { Header } from "../ui";
import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  Icon: IconType;
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ Icon, title }) => {
  return (
    <div className={styles.container}>
      <Icon size={20} className={styles.icon} />
      <Header level={3} value={title} className={styles.title} />
    </div>
  );
};

export default SectionHeader;
