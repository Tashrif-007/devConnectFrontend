import React from "react";
import { FiBold, FiItalic, FiCode, FiList } from "react-icons/fi";
import { Button } from "../../ui";
import styles from "./MarkdownToolbar.module.css";

interface MarkdownToolbarProps {
  onInsert: (before: string, after?: string) => void;
}

const MarkdownToolbar: React.FC<MarkdownToolbarProps> = ({ onInsert }) => {
  const toolbarButtons = [
    {
      icon: FiBold,
      label: "Bold",
      onClick: () => onInsert("**", "**"),
      title: "Bold (Ctrl+B)",
    },
    {
      icon: FiItalic,
      label: "Italic",
      onClick: () => onInsert("*", "*"),
      title: "Italic (Ctrl+I)",
    },
    {
      icon: FiCode,
      label: "Code",
      onClick: () => onInsert("`", "`"),
      title: "Inline Code",
    },
    {
      icon: FiList,
      label: "List",
      onClick: () => onInsert("- ", ""),
      title: "Bullet List",
    },
  ];

  return (
    <div className={styles.container}>
      {toolbarButtons.map((btn, index) => {
        const Icon = btn.icon;
        return (
          <Button
            key={index}
            type="button"
            onClick={btn.onClick}
            className={styles.button}
          >
            <Icon size={18} />
          </Button>
        );
      })}
    </div>
  );
};

export default MarkdownToolbar;
