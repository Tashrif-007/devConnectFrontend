import type React from "react";
import { Link } from "react-router-dom";

type AuthFooterProps = {
  value: string;
  link: string;
};

export const AuthFooter: React.FC<AuthFooterProps> = ({ value, link }) => {
  const linkVal = link.includes("login") ? "Login" : "Signup";
  return (
    <div className="text-center border-t mt-4 pt-4 border-[#e5e7eb]">
      <p className="text-sm text-[#4b5563]">
        {value}{" "}
        <Link to={link} className="font-semibold text-[#4b5563] no-underline">
          {" "}
          {linkVal}
        </Link>
      </p>
    </div>
  );
};
