import { ReactNode } from "react";


export interface SectionProps {
    id?: string;
    children: ReactNode;
    className: string;
    shell?: boolean;
    heading?: string | ReactNode;
    description?: string | ReactNode;
}