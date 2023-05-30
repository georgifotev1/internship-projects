export interface ICardProps {
  size?: "small" | "large";
  hasHeart?: boolean;
  isFavorite?: boolean;
  price?: number;
  discount?: number;
  shopNow?: boolean;
  rating?: number;
  category?: string;
  info?: {
    productName: string;
    cardType: string;
  };
}
