import { Typography } from "@mui/material";
import React from "react";

import { FaInstagram, FaRegUserCircle, FaGithub, FaRegCopyright } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const footerLinks = ["Privacy", "Terms", "Help", "Cookies", "FAQ's", "About", "Sitemap", "Others"];

  const RenderFooterLinks = () =>
    footerLinks.map((links) => (
      <ul key={links}>
        <li>
          <Typography variant="body1"> {links}</Typography>
        </li>
      </ul>
    ));

  return (
    <div className="footer-container">
      <div className="footer-icons">
        <FaInstagram />
        <FaXTwitter />
        <FaRegUserCircle />
        <FaGithub />
      </div>
      <div className="copyright-title">
        <FaRegCopyright /> <Typography variant="subtitle2"> Cinematic GuideBook LLC. All rights reserved</Typography>
      </div>
      <div className="footer-links">
        <RenderFooterLinks />
      </div>
    </div>
  );
};
export default Footer;
