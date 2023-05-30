import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./layout.css";
import "./theme.css";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
