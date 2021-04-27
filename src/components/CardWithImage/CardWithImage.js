import React from "react";
import Card from "react-bootstrap/Card";
import "./CardWithImage.css";

import { Link } from "react-router-dom";

const CardWithImage = ({ image, cardTitle, resourceUrl, index }) => (
  <Card border="secundary" id="cardWithImage">
    <Link id="linkToDetail" key={index} to={resourceUrl}>
      <Card.Img id="cardStyleImage" variant="top" src={image} alt={cardTitle} />
      <Card.Body>
        <Card.Text id="cardWithImageText">{cardTitle}</Card.Text>
      </Card.Body>
    </Link>
  </Card>
);

export default CardWithImage;
