import axios from "axios";
import { ICardProps } from "../components/Card/types";
import { sleep } from "../util/sleep";

export const useImages = async (category: string) => {
    const { data } = await axios("/database/images.json");
    await sleep(1000);
    return data.filter((image: ICardProps) => image.category === category);
}