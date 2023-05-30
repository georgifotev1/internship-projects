import { formatDay } from "../../utils/dayFormatter";
import { useDailyWeather } from "../../utils/get-data-hook";
import { Card } from "../card/Card";
import { SpinnerComponent } from "../spinner/Spinner";
import { codes } from "../../utils/weatherCode";
import { CONNECTION_URL } from "../../utils/constants";
import { useLocation } from "react-router-dom";

export default function DailyWeather() {
  const {
    state: { day },
  } = useLocation();

  const { response, isLoading, error } = useDailyWeather(
    `${CONNECTION_URL}?latitude=43.22&longitude=27.92&hourly=temperature_2m,weathercode&start_date=${day}&end_date=${day}`
  );
  if (error) {
    console.log(error);
  }

  return (
    <div className="content">
      {isLoading && <SpinnerComponent />}
      {response && (
        <>
          <h2 className="heading">
            The weather in Varna on&nbsp;
            {formatDay(new Date(response?.time[0].slice(0, 10).toString()))}
          </h2>
          <div className="cards">
            {response.time.map((_element, index) => (
              <div className="card" key={`Day card number ${index}`}>
                <Card
                  date={response?.time[index].slice(-5)}
                  temp={response.temperature_2m[index]}
                  icon={codes[response?.weathercode?.[index]].icon}
                  description={codes[response?.weathercode[index]].description}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
