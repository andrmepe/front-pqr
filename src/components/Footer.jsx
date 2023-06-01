import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <Link to="https://www.instagram.com/" target={"_blank"}rel=' noopener noreferrer'><InstagramIcon /> </Link>
      <Link to="https://twitter.com/" target={"_blank"}rel=' noopener noreferrer'><TwitterIcon /></Link> 
      <Link to="https://www.facebook.com/" target={"_blank"}rel=' noopener noreferrer'><FacebookIcon /></Link> 
      <Link to="https://www.linkedin.com/" target={"_blank"}rel=' noopener noreferrer'><LinkedInIcon /></Link>
      <Link to="https://web.whatsapp.com/" target={"_blank"}rel=' noopener noreferrer'><WhatsAppIcon /></Link>

      </div>
      <p> &copy; 2023 andrespqrs.com</p>
    </div>
  );
}

export default Footer;