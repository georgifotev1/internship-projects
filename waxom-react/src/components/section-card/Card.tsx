import { CardProps } from "./types";
export default function Card({
  className,
  imageProps,
  linkProps,
  heading,
  description,
  wrapperProps,
  line,
}: CardProps) {
  return (
    <div className={className} {...wrapperProps}>
      <a className={`${className}-image`} {...linkProps}>
        {imageProps && <img alt="" {...imageProps} />}
      </a>

      <h4>{heading}</h4>
      <p>{description}</p>
      {line && <hr className={`${className}-line`}></hr>}
    </div>
  );
}
