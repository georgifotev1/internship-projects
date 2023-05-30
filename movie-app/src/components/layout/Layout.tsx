import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { Main } from "../main/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Details } from "../details/Details";
import { Search } from "../search/Search";

export const Layout = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="movie/:id" element={<Details />} />
          <Route path="search" element={<Search />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
