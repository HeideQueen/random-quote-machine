import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import './quote-box.styles.scss';

const QuoteBox = ({ author, quote, getNewQuote }) => (
  <Container id='quote-box'>
    <Row>
      <Col>
        <h1 id='text'>
          <FontAwesomeIcon icon={faQuoteLeft} /> {quote}
        </h1>
        <p style={{ textAlign: 'end' }} id='author'>
          - {author}
        </p>
      </Col>
    </Row>

    <hr />

    <Row>
      <Col>
        <Button
          href={`https://twitter.com/intent/tweet?hashtags=quotes&text="${quote}" ${author}.`}
          target='_blank'
          rel='noopener noreferrer'
          id='tweet-quote'
        >
          <FontAwesomeIcon icon={faTwitter} />
        </Button>
      </Col>
      <Col style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant='danger' id='new-quote' onClick={getNewQuote}>
          New Quote
        </Button>
      </Col>
    </Row>
  </Container>
);

export default QuoteBox;
