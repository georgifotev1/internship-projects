import "./weekly-weather.css";
import { codes } from "../../utils/weatherCode";
import { Card } from "../card/Card";
import { SpinnerComponent } from "../spinner/Spinner";
import { useWeeklyWeather } from "../../utils/get-data-hook";
import { formatDay } from "../../utils/dayFormatter";
import { Link } from "react-router-dom";
import { CONNECTION_URL } from "../../utils/constants";
export default function WeeklyWeather() {
  const { response, error, isLoading } = useWeeklyWeather(
    `${CONNECTION_URL}?latitude=43.22&longitude=27.92&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`
  );
  if (error) {
    console.log(error);
  }

  return (
    <div className="content">
      <h1 className="heading">The weather in Varna for the following week.</h1>
      {isLoading && <SpinnerComponent />}
      {response && (
        <div className="cards">
          {response.time.map((_element, index) => (
            <Link
              className="card"
              to={"/details"}
              state={{
                day: response.time[index],
              }}
              key={`Card number ${index}`}
            >
              <Card
                date={formatDay(new Date(response?.time[index]))}
                maxTemp={response?.temperature_2m_max[index]}
                minTemp={response?.temperature_2m_min[index]}
                icon={codes[response?.weathercode?.[index]].icon}
                description={codes[response?.weathercode[index]].description}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
