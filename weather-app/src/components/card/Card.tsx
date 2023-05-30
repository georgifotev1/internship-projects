import { ICard } from "./types";

export const Card = ({
  date,
  temp,
  maxTemp,
  minTemp,
  icon,
  description,
}: ICard) => {
  return (
    <>
      <div className="date">{date.toString()}</div>
      {maxTemp && minTemp && (
        <div className="temperature-min-max">
          {Math.round(minTemp)}&#8451; / {Math.round(maxTemp)}&#8451;
        </div>
      )}
      {temp && <div className="temperature">{Math.round(temp)}&#8451;</div>}
      <div className="description">
        {icon}
        <p>{description}</p>
      </div>
    </>
  );
};
