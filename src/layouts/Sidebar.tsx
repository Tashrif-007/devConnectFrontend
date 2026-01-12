import React from "react";
import Categories from "../components/feed/Categories";
import Developers from "../components/feed/Developers";

interface SidebarProps {
  showDevelopers?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ showDevelopers = true }) => {
  return (
    <div className="sticky top-20 max-w-10/12 space-y-6 h-fit">
      <Categories />
      {showDevelopers && <Developers />}
    </div>
  );
};

export default Sidebar;
