import { Card } from "../../components/Card/Card";
import { Section } from "../../components/section/Section";
import "./Details.css";
import avatar from "../../assets/user-avatar.png";
import { Button } from "../../components/Button/Button";
import { UserComment } from "../../components/Comment/Comment";
import { Link } from "react-router-dom";
import { Rating } from "../../components/Rating/Rating";
import { SocialMedia } from "../../components/SocialMedia/SocialMedia";
import { useEffect, useState } from "react";
import { ICardProps } from "../../components/Card/types";
import { useProducts } from "../../hooks/products-hook";
import { Spinner } from "../../components/Spinner/Spinner";

export const Details = () => {

  const [products, setProducts] = useState<ICardProps[]>([]);

  useEffect(() => {
    async function FetchData() {
      const response = await useProducts('more-products');
      setProducts(response);
    }
    FetchData();
  }, []);

  const comments = [
    {
      name: "Amanda Charter",
      avatar: avatar,
      purchased: true,
      rating: 4,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magexercitation ullna aliqua. Ut enim ad minim veniam.",
      timeline: "1 month ago",
    },
    {
      name: "Helena Doe",
      avatar: avatar,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      timeline: "2 month ago",
    },
    {
      name: "Francisca",
      avatar: avatar,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magexercitation ullna aliqua. Ut enim ad minim veniam.",
      timeline: "2 month ago",
    },
    {
      name: "Elizabeth",
      avatar: avatar,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      timeline: "3 month ago",
    },
  ];

  const productProps = [
    {
      propName: "Size:",
      prop: (
        <>
          <div className='product-sizes'>
            <span>S</span>
            <span className='hovered-size'>M</span>
            <span>L</span>
            <span className='out-of-stock'>XL</span>
          </div>
        </>
      ),
    },
    {
      propName: "Color:",
      prop: (
        <>
          <div className='product-colors'>
            <div className='ellipse color1'></div>
            <div className='ellipse color2'></div>
            <div className='ellipse color3'></div>
          </div>
        </>
      ),
    },
    {
      propName: "Quantity:",
      prop: (
        <>
          <input
            className='product-quantity'
            type='number'
            placeholder='5 pieces'
          />
        </>
      ),
    },
    {
      propName: "Shipping:",
      prop: (
        <>
          <div className='shipping-info'>
            <div className='free-shipping'>
              <p>
                US & Canada <span className='discount'>FREE SHIPPING</span>
              </p>
            </div>
            <span>$10 Worldwide</span>
          </div>
        </>
      ),
    },
  ];
  return (
    <Section
      className='product-details'
      shell
      heading='Fashion Product Name'
      description='Women / Dress'
    >
      <div className='details-content'>
        <div className='side'>
          <div className='product-images border'>
            <Card hasHeart={true} size='large'></Card>
            <div className='small-cards'>
              <Card size='small'></Card>
              <Card size='small'></Card>
            </div>
            <p className='comments-count'>24 Comments</p>
          </div>
          <div className='comments-form'>
            <label>Comment:</label>
            <form action='post'>
              <textarea name='comment' rows={5}></textarea>
              <div className='submit-comment'>
                <div className='comment-rating'>
                  <Rating rating={0}></Rating>
                </div>
                <Button variant='black' text='Post Comment'></Button>
              </div>
            </form>
          </div>
          <div className='comments'>
            {comments.map(
              (
                { name, avatar, purchased, rating, comment, timeline },
                index
              ) => (
                <UserComment
                  key={`User comment ${index}`}
                  avatar={avatar}
                  name={name}
                  comment={comment}
                  timeline={timeline}
                  purchased={purchased}
                  rating={rating}
                ></UserComment>
              )
            )}
          </div>
        </div>
        <div className='side'>
          <div className='price-info border'>
            <div className='current-price'>
              <div className='price-stats'>
                <label className='price'>$500</label>
                <label className='discount'>30% OFF</label>
                <span>5 pieces left</span>
              </div>
              <label className='old-price'>$1000</label>
            </div>
            <div className='price-reviews'>
              <div className='rating'>
                <Rating rating={4}></Rating>
              </div>
              <span className='reviews'>7 Reviews</span>
            </div>
          </div>
          <div className='product-props'>
            <p>
              Lorem ipsum dolor sit amet, tellus enim, varius nec magna lobortis
              neque, aenean tempor, arcu magnam nisl nulla .
            </p>
            <div className='properties'>
              {productProps.map(({ propName, prop }, index) => (
                <div key={`Product property ${index}`} className='property'>
                  <label>{propName}</label>
                  {prop}
                </div>
              ))}
            </div>
          </div>
          <div className='buy-buttons'>
            <Button variant='orange' text='BUY NOW'></Button>
            <Button variant='white' text='ADD TO MY CART'></Button>
          </div>
          <div className='social'>
            <label className='share'>Share On:</label>
            <SocialMedia></SocialMedia>
          </div>
          <div className='product-detail'>
            <div className='detail-heading border'>Product Detail</div>
            <div className='detail-description'>
              <p>
                Lorem ipsum dolor sit amet, tellus enim, varius nec magna
                lobortis neque, aenean tempor, arcu magnam nisl nulla a, sed
                nec. Ac elit consequat et integer. Sed in lobortis. Pulvinar
                nulla viverra orci ullamcorper faucibus fermentum,
              </p>
              <p>
                Tincidunt vitae eget, vivamus velit viverra. Magnis scelerisque
                posuere hymenaeos quis ut non. llamcorper faucibus fermentum,
                tincidunt vitae eget, vivamus velit viverra. Magnis scelerisque
                posuere hymenaeos quis ut non.{" "}
              </p>
            </div>
          </div>
          <div className='product-size-table'>
            <div className='detail-heading border'>Size</div>
            <div className='table'>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th>Shoulder</th>
                    <th>Armhole</th>
                    <th>Sleeve</th>
                    <th>Cuff</th>
                    <th>Bust</th>
                    <th>Length</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='dark-gray'>
                    <td>S</td>
                    <td className='size-td'> SMALL </td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                  </tr>
                  <tr className='light-gray'>
                    <td>M</td>
                    <td className='size-td'> MEDIUM</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                  </tr>
                  <tr className='dark-gray'>
                    <td>L</td>
                    <td className='size-td'> LARGE </td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                  </tr>
                  <tr className='light-gray'>
                    <td>XL</td>
                    <td className='size-td'> EXTRA LARGE </td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className='faq'>
            <div className='detail-heading border'>FAQ</div>
            <div className='detail-description'>
              <p>
                <b>
                  Lorem ipsum dolor sit amet, tellus enim, varius nec magna
                  lobortis neque.
                </b>
                <br /> Aenean tempor, arcu magnam nisl nulla a, sed nec. Ac elit
                consequat et integer. Sed in lobortis. Pulvinar nulla viverra
                orci ullamcorper faucibus fermentum,
              </p>
              <p>
                <b>
                  Tincidunt vitae eget, vivamus velit viverra. Magnis
                  scelerisque posuere hymenaeos quis ut non.
                </b>
                <br /> llamcorper faucibus fermentum, tincidunt vitae eget,
                vivamus velit viverra. Magnis scelerisque posuere hymenaeos quis
                ut non.{" "}
              </p>
            </div>
          </div>
          <div className='more-products'>
            <div className='detail-heading border'>You May Also Like</div>
            <div className='cards'>
              {products.length === 0 ? <Spinner></Spinner> : products.map(({ info }, index) => (
                <Link
                  key={`More products ${index}`}
                  className='link'
                  to={"/details"}
                >
                  <Card price={100} hasHeart={true} info={info}></Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
