import React from "react";
import { FiX } from "react-icons/fi";
import styles from "./ModalHeader.module.css";

interface ModalHeaderProps {
  title: string;
  onClose: () => void;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ title, onClose }) => {
  return (
    <div className={styles["header"]}>
      <h2 className={styles["title"]}>{title}</h2>
      <button onClick={onClose} className={styles["close-button"]}>
        <FiX size={24} className={styles["close-icon"]} />
      </button>
    </div>
  );
};

export default ModalHeader;
