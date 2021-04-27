import React from 'react';
import Card from 'react-bootstrap/Card';
import './Quote.css';

const Quote = ({ quoteHeader, quoteText, author, profession }) => (
  <Card id="quote">
    <Card.Header id="quoteHeader">{quoteHeader}</Card.Header>
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p id="quoteText">{quoteText}</p>
        <footer className="blockquote-footer">
          {author}
          <cite title="Web developer">
            <b> {profession}</b>
          </cite>
        </footer>
      </blockquote>
    </Card.Body>
  </Card>
);

export default Quote;