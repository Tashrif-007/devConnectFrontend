import type React from "react";
import styles from './DividerBar.module.css';

type DividerBarProps = {
  value: string;
};
export const DividerBar: React.FC<DividerBarProps> = ({ value }) => {
  return (
    <div className="mt-4 max-w-md flex items-center gap-4">
      <div className="flex-1 h-px bg-gray-300"></div>
      <span
        className="text-[#4b5563] text-xs font-semibold uppercase tracking-wider whitespace-nowrap
"
      >
        {value}
      </span>
      <div className="flex-1 h-px bg-gray-300"></div>
    </div>
  );
};
