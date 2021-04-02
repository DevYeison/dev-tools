import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ brandName, topicList }) => {
  return (
    <header className="d-flex bd-highlight">
      <Link
        id="home-link"
        to="/home"
        className="p-2 flex-grow-1 bd-highlight heading"
      >
        <span>{brandName}</span>
      </Link>
      <>
        {topicList.map((button) => (
          <Link
            className="p-2 bd-highlight link-element"
            to={button.route}
            key={button.id}
          >
            {button.title}
          </Link>
        ))}
      </>
    </header>
  );
};

export default Header;
