import {ICardProps} from "../Card/types"

export interface IProductsProps {
    id?: string;
    className: string;
    heading: string;
    description: string;
    cards: ICardProps[];
    btnLink?: string;
}
