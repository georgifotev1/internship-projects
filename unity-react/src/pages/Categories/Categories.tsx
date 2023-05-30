import { Banner } from "../../components/Banner/Banner";
import bannerImage from "../../assets/cat-banner.png";
import "./Categories.css";
import { Link } from "react-router-dom";
import { Section } from "../../components/section/Section";
import { Accordion } from "../../components/Accordion/Accordion";
import { Card } from "../../components/Card/Card";
import { SortDropdown } from "../../components/SortDropdown/SortDropdown";
import { ICardProps } from "../../components/Card/types";
import { useEffect, useState } from "react";
import { useProducts } from "../../hooks/products-hook";
import { Spinner } from "../../components/Spinner/Spinner";

export const Categories = ({ heading }: { heading: string }) => {

  const filters = [
    {
      category: "Categories",
      values: ["Top", "Bottom", "Dress", "Accessories", "Footwear", "Other"],
    },
    {
      category: "Price",
      values: ["Low", "Medium", "High"],
    },
    {
      category: "Size",
      values: ["S", "M", "L", "XL"],
    },
    {
      category: "Brand",
      values: ["Mango", "Nike", "H&M", "ZARA", "Forever 21"],
    },
    {
      category: "Color",
      values: ["White", "Black", "Other"],
    },
  ];

  const [products, setProducts] = useState<ICardProps[]>([]);

  useEffect(() => {
    async function FetchData() {
      const response = await useProducts(heading);
      setProducts(response);
    }
    FetchData();
  });

  const sortingOptions = ["Price", "Size", "Color", "Brand"];
  return (
    <>
      <div className="categories-banner">
        <div className="shell">
          <Banner
            className="categories-banner-info"
            gender={heading}
            heading={heading}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua."
            imageProps={{
              src: bannerImage,
              alt: "banner-image",
            }}
          ></Banner>
        </div>
      </div>
      <Section className="categories" shell>
        <div className="categories-content">
          <div className="options-side">
            <div className="search-options">
              <label>Search Option</label>
              <input type="text" placeholder="Search" />
            </div>
            <div className="filter-by">
              <label className="border max-width">Filter By:</label>
            </div>
            <div className="filters">
              <Accordion filters={filters}></Accordion>
            </div>
          </div>
          <div className="all-items">
            <div className="border sort-items">
              <label className="total-items max-width">{products.length} Items Found</label>
              <SortDropdown sortingOptions={sortingOptions}></SortDropdown>
            </div>
            <div className="cards">
              {products.length === 0 ? <Spinner></Spinner> : products.map(
                (
                  { hasHeart, isFavorite, price, shopNow, rating, info },
                  index
                ) => (
                  <Link
                    key={`Product ${index}`}
                    className="link"
                    to={"/details"}
                  >
                    <Card
                      info={info}
                      hasHeart={hasHeart}
                      isFavorite={isFavorite}
                      price={price}
                      shopNow={shopNow}
                      rating={rating}
                    ></Card>
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};
