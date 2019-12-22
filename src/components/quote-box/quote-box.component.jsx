import React from 'react';

import './quote-box.styles.scss';

const QuoteBox = ({ quote: { author, quote }, getNewQuote }) => (
  <div id='quote-box'>
    <h1 id='text'>{quote}</h1>
    <p id='author'>- {author}.</p>

    <div id='buttons'>
      <a
        href={`https://twitter.com/intent/tweet?hashtags=quotes&text="${quote}" ${author}.`}
        target='_blank'
        rel='noopener noreferrer'
        id='tweet-quote'
      >
        Tweet Quote
      </a>

      <button id='new-quote' onClick={getNewQuote}>
        New Quote
      </button>
    </div>
  </div>
);

export default QuoteBox;
