import React from 'react';
import Card from 'react-bootstrap/Card';
import './CardWithAnimation.css';

import Lottie from 'react-lottie';

const CardWithAnimation = ({title, description, animation, defaultOptions, isPaused, handleAnimationClick }) => (
  <Card border="light">
    <Lottie id="lottieImage"options={{animationData: animation.default, ...defaultOptions}} height={280} width={270} isStopped={false} isPaused={isPaused} onClick={handleAnimationClick}/>
    <Card.Body>
      <Card.Title data-test-id="cardTitle" id="cardTitle">{title}</Card.Title>
      <Card.Text data-test-id="cardText" id="cardText">{description}</Card.Text>
    </Card.Body>
  </Card>
);

export default CardWithAnimation;