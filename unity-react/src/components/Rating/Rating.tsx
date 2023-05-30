import { IRatingProps } from "./types";

export const Rating = ({ rating }: IRatingProps) => {
  const stars = Array.from(Array(5).keys());
  return (
    <>
      {stars.map((_star, index) => (
        <span
          key={`Star ${index}`}
          className={`fa fa-star${index + 1 <= rating ? " checked" : ""}`}
        ></span>
      ))}
    </>
  );
};
