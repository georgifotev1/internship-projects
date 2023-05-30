import { ReactNode } from "react";


export interface CardProps {

className: string;
imageProps?: {
    src: string;
    alt?: string;
};
 linkProps: {
    href: string;
    style?: {
        backgroundImage: string;
    }
 }
  heading: string;
  description: string
  wrapperProps?: {
    onMouseOver: () => void;
    onMouseOut: () => void;
  }
  line?: ReactNode;
}