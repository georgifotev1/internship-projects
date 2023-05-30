import axios from "axios";
import { ICardProps } from "../components/Card/types";
import { sleep } from "../util/sleep";

export const useProducts = async (category: string, pageSize?: number) => {
  const { data } = await axios("/database/products.json");
  await sleep(1000);
  return data.filter(
    (product: ICardProps) => product.category === category.toLowerCase()
  ).slice(0, pageSize);
};
