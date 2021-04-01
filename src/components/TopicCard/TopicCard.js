import React from 'react';
import Card from 'react-bootstrap/Card';
import './TopicCard.css';

const TopicCard = ({ img, title, description }) => (
  <Card border="light">
    <Card.Img id="cardImg" variant="top" src={img} />
    <Card.Body>
      <Card.Title id="cardTitle">{title}</Card.Title>
      <Card.Text id="cardText">{description}</Card.Text>
    </Card.Body>
  </Card>
);

export default TopicCard;