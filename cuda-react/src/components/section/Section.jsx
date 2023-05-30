import "./section.css";

export const Section = ({
  children,
  title,
  description,
  sectionId,
  className,
  titleH1,
  textColorClassName = "text-white",
  portfolioNav,
}) => {
  return (
    <section
      id={sectionId}
      className={`section ${className} ${textColorClassName}`}
    >
      <div className='shell'>
        <div className='row justify-content-center'>
          <div className='section-head col-md-12 text-center'>
            {titleH1 ? <h1>{title}</h1> : <h2>{title}</h2>}
            {description && <p>{description}</p>}
            {portfolioNav && (
              <ul className='style-lists'>
                {portfolioNav.map((item, index) => (
                  <li key={`Link ${index}`}>
                    <a className='portfolio-link' href={item.href}>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {children}
        </div>
      </div>
    </section>
  );
};
