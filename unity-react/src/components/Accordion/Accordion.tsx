import './Accordion.css';
import { IAccordionProps } from './types'
import { useState } from 'react';

export const Accordion = ({ filters }: IAccordionProps) => {
  const [selected, setSelected] = useState<number | null>(null);
  const toggle = (index: number) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <>
      {filters.map(({ category, values }, index) => (
        <div key={`Filter ${index}`} className='accordion-item border'>
          <div className='accordion-category' onClick={() => toggle(index)}>
            <label>{category}</label>
            <span>{selected === index ? '-' : '+'}</span>
          </div>
          <ul
            className={`accordion-values${selected === index ? ` active` : ``}`}
          >
            {values.map((value, index) => (
              <li key={`${category}-${index}`}>
                <input id={value} type='checkbox' />
                <label htmlFor={value}>{value}</label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};
