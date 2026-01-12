import React from "react";
import Categories from "../components/feed/Categories";
import Developers from "../components/feed/Developers";
import styles from "./Sidebar.module.css";

interface SidebarProps {
  showDevelopers?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ showDevelopers = true }) => {
  return (
    <div className={styles.container}>
      <Categories />
      {showDevelopers && <Developers />}
    </div>
  );
};

export default Sidebar;
