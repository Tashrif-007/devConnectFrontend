import type React from "react"

type AuthInputsProps = {
    children: React.ReactNode;
    className?: string;
}

export const AuthInputs: React.FC<AuthInputsProps> = ({children, className}) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

