import React, { useState, useEffect } from 'react';

import QuoteBox from './components/quote-box/quote-box.component';

import Spinner from 'react-bootstrap/Spinner';

import './App.scss';

const App = () => {
  const [newQuote, setNewQuote] = useState([]);

  const getNewQuote = async () => {
    try {
      const blob = await fetch(
        'https://www.abbreviations.com/services/v2/quotes.php?uid=7073&tokenid=akivxDtjkVeBtEZi&searchtype=RANDOM&format=json'
      );

      const data = await blob.json();

      setNewQuote([data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNewQuote();
  }, []);

  if (newQuote.length) {
    const { author, quote } = newQuote[0].result;

    return <QuoteBox author={author} quote={quote} getNewQuote={getNewQuote} />;
  } else {
    return (
      <Spinner animation='border' variant='light'>
        <span className='sr-only'>...loading</span>
      </Spinner>
    );
  }
};

export default App;
