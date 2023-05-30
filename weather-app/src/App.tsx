import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import WeeklyWeather from "./components/weekly-weather/WeeklyWeather";
import DailyWeather from "./components/daily-weather/DailyWeather";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WeeklyWeather />} />
        <Route path="/details" element={<DailyWeather />} />
      </Routes>
    </Router>
  );
}

export default App;
