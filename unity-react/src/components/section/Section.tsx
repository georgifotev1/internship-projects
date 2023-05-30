import { SectionProps } from "./types";
export const Section = ({
  children,
  id,
  className,
  shell,
  heading,
  description,
}: SectionProps) => {
  return (
    <section id={id} className={className}>
      <div className={`${shell ? "shell" : "no-shell"}`}>
        {heading && (
          <div className='section-head'>
            <h3 className='section-heading'>{heading}</h3>
            <p className='section-subheading'>{description}</p>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
