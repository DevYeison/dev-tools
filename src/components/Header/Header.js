import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ brandName, topicList }) => {

  const listItems = topicList.map((button) => (
    <Link
      className="p-2 link-element"
      to={button.route}
      key={button.id}
    >
      {button.title}
    </Link>
  ));

  return (
    <header className="d-flex">
      <div id="brand-container">
      <Link className="px-2 link-element" to="/home">
        <span id="brand-name">{brandName}</span>
      </Link>
      </div>
      <>
        {listItems}
      </>

    </header>
  );
};

export default Header;
