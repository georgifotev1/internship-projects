import { IButtonProps } from './types';

export const Button = ({ variant, text, className }: IButtonProps) => (
  <button
    className={`${variant === 'white' ? 'button' : ''} ${
      variant === 'orange' ? 'orange' : className
    } 
      ${variant === 'black' ? 'black' : className}`}
    type='submit'
  >
    {text}
  </button>
);
