import type React from "react";
import { Header } from "../common/Header";
import { Paragraph } from "../common/Paragraph";

type AuthHeaderProps = {
    hValue: string;
    pValue: string;
    className?: string;
}
export const AuthHeader: React.FC<AuthHeaderProps> = ({hValue, pValue, className}) => {
    return (
        <div className={className}>
            <Header level={1} value={hValue} className="text-2xl font-bold text-[#111827]" />
            <Paragraph className="text-sm text-[#4b5563]">{pValue}</Paragraph>
        </div>
    );
}