import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import "./layout.css";
import "./theme.css";
import { Details } from "../../pages/Details/Details";
import { Home } from "../../pages/Home/Home";
import { Categories } from "../../pages/Categories/Categories";
import { NotFound } from "../NotFound/NotFound";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
export default function Layout() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/categories">
          <Route
            path="/categories/women"
            element={<Categories heading="Women" />}
          />
          <Route
            path="/categories/men"
            element={<Categories heading="Men" />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}
