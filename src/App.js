import React, { useState, useEffect } from 'react';

import QuoteBox from './components/quote-box/quote-box.component';

import './App.scss';

const App = () => {
  const [quote, setQuote] = useState({});

  const getNewQuote = () => {
    fetch('http://quotes.stormconsultancy.co.uk/random.json')
      .then(res => res.json())
      .then(newQuote => setQuote(newQuote));
  };

  useEffect(() => {
    getNewQuote();
  }, []);

  return (
    <div id='app'>
      <QuoteBox quote={quote} getNewQuote={getNewQuote} />
    </div>
  );
};

export default App;
