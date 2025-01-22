import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            corrupti ratione perspiciatis a, quidem nulla ipsam, nihil voluptate
            vel cupiditate quos repellendus consequatur molestiae rem modi eaque
            fugiat velit rerum.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
              <div className="footer-content-center">
                  <h2>COMPANY</h2>
                  <ul><li>Home </li>
                  <li>About us </li>
                  <li>Delivery </li>
                  <li>Privacy policy</li></ul>
        </div>
              <div className="footer-content-right">
                  <h2>GET IN TOUCH</h2>
                  <ul>
                      <li>+1-23-323-893</li>
                      <li>contact@tomato.com</li>
                  </ul>
        </div>
          </div>
          <hr />
          <p className="footer-copyright">
              Copyright 2024 @ TOmato.com - All RIght Reserved.
          </p>
    </div>
  );
};

export default Footer;
