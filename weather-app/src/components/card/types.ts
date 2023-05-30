import { ReactNode } from "react";

export interface ICard {
  date: Date | string;
  temp?: number;
  maxTemp?: number;
  minTemp?: number;
  icon: ReactNode;
  description: string;
}
