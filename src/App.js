import React, { useState, useEffect } from 'react';

import QuoteBox from './components/quote-box/quote-box.component';

import './App.scss';

const App = () => {
  const [newQuote, setNewQuote] = useState([]);

  const getNewQuote = () => {
    fetch(
      'https://www.abbreviations.com/services/v2/quotes.php?uid=7073&tokenid=akivxDtjkVeBtEZi&searchtype=RANDOM&format=json'
    )
      .then(res => res.json())
      .then(newQuote => setNewQuote([newQuote]))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getNewQuote();
  }, []);

  if (newQuote.length) {
    const { author, quote } = newQuote[0].result;

    return (
      <div id="app">
        <QuoteBox author={author} quote={quote} getNewQuote={getNewQuote} />
      </div>
    );
  } else {
    return <div>...loading</div>;
  }
};

export default App;
