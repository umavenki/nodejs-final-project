import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  const { token } = useAuth();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section about">
            <h3 className="footer-heading">BooksOn</h3>
            <p className="footer-text">Infinite stories, one Click away.</p>
            <div className="social-icons">
              <div className="footer-section icons">
                <h2 className="footer-heading"> Follow Us</h2>
                <a
                  href="https://facebook.com"
                  aria-label="Facebook"
                  target="_blank"
                  rel=""
                >
                  <FacebookOutlinedIcon className="icon" />
                </a>
                <a
                  href="https://instagram.com"
                  aria-label="Instagram"
                  target="_blank"
                  rel=""
                >
                  <InstagramIcon className="icon" />
                </a>
                <a
                  href="https://twitter.com"
                  aria-label="Twitter"
                  target="_blank"
                  rel=""
                >
                  <TwitterIcon className="icon" />
                </a>
                <a
                  href="https://youtube.com"
                  aria-label="YouTube"
                  target="_blank"
                  rel=""
                >
                  <YouTubeIcon className="icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-section links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-list">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/books" className="footer-link">
                  Search Books
                </Link>
              </li>
              <li>
                <Link to="/login" className="footer-link">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="footer-link">
                  Signup
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h4 className="footer-heading">Contact Us</h4>
            <div className="contact-info">
              <p className="footer-text">
                <i className="fas fa-envelope contact-icon"></i>{" "}
                info@bookson.com
              </p>
              <p className="footer-text">
                <i className="fas fa-phone contact-icon"></i> +1 (408) 123-4567
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} BooksOn. All rights reserved.</p>
          <div className="legal-links"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
