import React from 'react';
import Card from 'react-bootstrap/Card';
import './CardWithImage.css';

const CardWithImage = ({ img, title, description }) => (
  <Card border="light">
    <Card.Img data-test-id="cardImage" id="cardImg" variant="top" src={img} />
    <Card.Body>
      <Card.Title data-test-id="cardTitle" id="cardTitle">{title}</Card.Title>
      <Card.Text data-test-id="cardText" id="cardText">{description}</Card.Text>
    </Card.Body>
  </Card>
);

export default CardWithImage;