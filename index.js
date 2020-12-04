const fetch = require('node-fetch');
const express = require('express');
const app = express();
const port = 3000;

const QOTD_URL  = "http://quotes.rest/qod.json";
const cannedResponse = {
  json: () => {
    return {	
      contents: {
        quotes: [{
          quote: "Today I will do what others won’t, so tomorrow I can do what others can’t.",
          author: "Jerry Rice"
        }]
      }
    }
  }
};


const fetchQuote = async () => {
  return fetch(QOTD_URL)
    .then(res => {
      if(res.ok) {
      	return res;
      }
      return cannedResponse
    })
    .then(res => res.json())
    .then(res => {
      const { author, quote } = res.contents.quotes[0];
      return {
        author,
	quote
      };
    })
    .catch(err => {
      console.log(err);
      return {
        author: null,
	quote: null
      };
    });
};

app.get('/', async (req, res) => {
  const {author, quote } = await fetchQuote();
  if (author && quote) {
    res.send(quote + " - " + author);
  } else {
    res.send("error");
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
