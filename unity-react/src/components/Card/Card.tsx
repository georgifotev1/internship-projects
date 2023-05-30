import { Button } from "../Button/Button";
import "./Card.css";
import { ICardProps } from "./types";
import heart from "../../assets/icons/heart-icon.png";
import redHeart from "../../assets/icons/red-heart-icon.png";
import { Rating } from "../Rating/Rating";

export const Card = ({
  size,
  hasHeart,
  isFavorite,
  price,
  discount,
  shopNow,
  rating,
  info,
}: ICardProps) => {
  const image = `${isFavorite ? redHeart : heart}`;
  return (
    <div className={`${size ? `card-${size}` : `card`}`}>
      <div className={`${size ? `card-image ${size}` : "card-image"}`}>
        {hasHeart && <img src={image} alt="heart" />}
        <div className="card-details">
          {price && <div className="card-price">${price}</div>}
          {discount && <div className="card-discount">{discount}%</div>}
          {shopNow && (
            <Button
              variant="orange"
              text="Shop Now"
              className="card-shop-now"
            ></Button>
          )}
        </div>
      </div>
      <div className="card-info">
        <h5 className="card-name">{info?.productName}</h5>
        <p className="card-type">{info?.cardType}</p>
      </div>
      {rating !== undefined && (
        <div className="card-rating">
          <Rating rating={rating}></Rating>
        </div>
      )}
    </div>
  );
};
