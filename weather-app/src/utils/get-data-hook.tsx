import axios from "axios";
import { useEffect, useState } from "react";
import { IDailyResponse } from "../types/daily";
import { IWeeklyResponse } from "../types/weekly";

export function useWeeklyWeather(url: string) {
  const [response, setResponse] = useState<IWeeklyResponse>();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        const res = await axios.get(url);
        setResponse(res.data.daily);
        setIsLoading(false);
      } catch (err: any) {
        setError(err.message);
      }
    })();
  }, [url]);

  return { response, error, isLoading };
}

export function useDailyWeather(url: string) {
  const [response, setResponse] = useState<IDailyResponse>();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const now = new Date().getHours();
  const cardsPerPage = 8;
  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        const res = await axios.get(url);
        const { temperature_2m, weathercode, time } = res?.data?.hourly;
        setResponse({
          temperature_2m: temperature_2m.slice(now, now + cardsPerPage), // take only 8 days from now
          weathercode: weathercode.slice(now, now + cardsPerPage),
          time: time.slice(now, now + cardsPerPage),
        });

        setIsLoading(false);
      } catch (err: any) {
        setError(err.message);
      }
    })();
  }, [now, url]);
  return { response, error, isLoading };
}
