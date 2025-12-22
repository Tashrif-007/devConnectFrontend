import React from "react";

interface DividerProps {
  text?: string;
}

const Divider: React.FC<DividerProps> = ({ text = "OR SIGN UP WITH" }) => {
  return (
    <div className="divider">
      <div className="divider-line"></div>
      <span className="divider-text">{text}</span>
      <div className="divider-line"></div>
    </div>
  );
};

export default Divider;
