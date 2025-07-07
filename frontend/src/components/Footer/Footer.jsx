import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.eatery_logo} alt="" style={{ width: "160px" }} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            in rem voluptatem voluptatibus perferendis, voluptatum officia
            pariatur quisquam omnis eveniet qui id explicabo nam distinctio
            accusantium sint cumque deserunt aut minima. Voluptate dolorum,
            quidem, dolor quis quia aliquam exercitationem totam ratione
            repellendus cumque suscipit dolore corporis, quaerat amet molestias
            pariatur.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="Linkedin" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>info@eatery.com</li>
            <li>+123-456-7890</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright &copy; 2025 Eatery.com - All rights reserved
      </p>
    </div>
  );
};

export default Footer;
