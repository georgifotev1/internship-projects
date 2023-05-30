import { SectionProps } from "./types";

export default function Section({
  children,
  id,
  className,
  shell,
  heading,
  description,
}: SectionProps) {
  return (
    <section id={id} className={className}>
      <div className={`${shell ? "shell" : ""}`}>
        {heading && (
          <div className='section-head'>
            <h3>{heading}</h3>
            <div className='subTitle'>{description}</div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
