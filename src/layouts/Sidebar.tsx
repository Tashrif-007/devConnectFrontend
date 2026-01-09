import React from "react";
import Categories from "../components/feed/Categories";
import Developers from "../components/feed/Developers";

const Sidebar: React.FC = () => {
  return (
    <div className="sticky top-20 w-80 space-y-6 h-fit">
      <Categories />
      <Developers />
    </div>
  );
};

export default Sidebar;
