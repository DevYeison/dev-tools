import React from "react";
import "./Footer.css";
const Footer = ({ year, ReactUrl, GithubUrl }) => {
  return (
    <footer id="footer">
      <span>
        Creado con{" "}
        <a
          href={ReactUrl}
          className="link-footer"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          React{" "}
        </a>
        por
        <a
          href={GithubUrl}
          className="link-footer"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          {" "}
          Yeison
        </a>{" "}
        @{year}&#127795;
      </span>
    </footer>
  );
};

export default Footer;
