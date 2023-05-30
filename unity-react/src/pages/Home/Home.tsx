import { Accsessories } from "../../sections/Accsessories/Accsessories";
import { Brands } from "../../sections/Brands/Brands";
import { Intro } from "../../sections/intro/Intro";
import { Mix } from "../../sections/Mix/Mix";
import { Catalog } from "../../sections/Catalog/Catalog";

export const Home = () => (
  <>
    <Intro />
    <Catalog />
    <Brands />
    <Accsessories />
    <Mix />
  </>
);
