import { INutrientsTypes } from "./nutrients-type";
export interface INutrients {
  daily: number;
  hasRDI: boolean;
  label: string;
  schemaOrgTag: string;
  sub: INutrientsTypes[];
  tag: string;
  total: number;
  unit: string;
}
