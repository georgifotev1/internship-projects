import { Rating } from "../Rating/Rating";
import "./Comment.css";
import { ICommentProps } from "./types";

export const UserComment = ({
  name,
  avatar,
  purchased,
  rating,
  comment,
  timeline,
}: ICommentProps) => (
  <div className='comment border'>
    <img className='user-avatar' src={avatar} alt='avatar' />
    <div className='user-details'>
      <div className='user-purchased'>
        <h3>{name}</h3>
        <div className='user-rating'>
          {purchased && <label className='purchased'>PURCHASED</label>}
          {rating && (
            <div className='comment-rating'>
              <Rating rating={rating}></Rating>
            </div>
          )}
        </div>
      </div>
      <p>{comment}</p>
      <span>{timeline}</span>
    </div>
  </div>
);
