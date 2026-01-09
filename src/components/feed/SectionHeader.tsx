import React from "react";
import { type IconType } from "react-icons";
import { Header } from "../ui";

interface SectionHeaderProps {
  Icon: IconType;
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ Icon, title }) => {
  return (
    <div className="flex items-center gap-2 mb-4">
      <Icon size={20} className="text-gray-700" />
      <Header level={3} value={title} className="text-lg font-bold text-gray-900" />
    </div>
  );
};

export default SectionHeader;
