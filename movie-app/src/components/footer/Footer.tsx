import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faCodeBranch,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <footer className="footer">
      <ul className="social-media">
        <li>
          <FontAwesomeIcon icon={faEnvelope} size="xl" />
        </li>
        <li>
          <FontAwesomeIcon icon={faCodeBranch} size="xl" />
        </li>
        <li>
          <FontAwesomeIcon icon={faLink} size="xl" />
        </li>
      </ul>
      <div className="copyright">&copy;2022 Georgi Fotev</div>
    </footer>
  );
};
