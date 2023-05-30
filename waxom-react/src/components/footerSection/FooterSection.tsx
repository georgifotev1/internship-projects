
import { FooterProps } from "./types";
export default function FooterSection({ children, heading }: FooterProps) {
  return (
    <div className='footer-content'>
      {heading && <h4>{heading}</h4>}

      {children}
    </div>
  );
}
