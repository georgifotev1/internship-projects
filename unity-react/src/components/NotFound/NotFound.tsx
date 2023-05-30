
import { Link } from "react-router-dom";
import "./NotFound.css";


export const NotFound = () => (
  <div className="not-found">
    <h2>Page Not Found</h2>
    <Link to={'/'}>Go to home page</Link>
  </div>
);
