import type React from "react";
import { USER_ROLES } from "../../types";
import styles from './Options.module.css';


type OptionsProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => Promise<void>;
  disabled: boolean;
  className: string;
};
const Options: React.FC<OptionsProps> = ({
  value,
  onChange,
  disabled,
  className,
}) => {
  return (
    <div>
      <select
        value={value}
        onChange={onChange}
        className={className}
        disabled={disabled}
      >
        {Object.entries(USER_ROLES).map(([key, value]) => (
          <option key={key} value={value}>
            {key.charAt(0) + key.slice(1).toLowerCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Options;
