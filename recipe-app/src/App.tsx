import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Details } from "./components/details/Details";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:title" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
