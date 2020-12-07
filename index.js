const fetch = require('node-fetch');
const { v4: uuidv4 } = require('uuid');
const express = require('express');

const Redis = require("ioredis");
const redisClient = new Redis("redis://db:6379");

const app = express();
const port = 3000;

app.use(express.json());

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
	const { author, quote } = await fetchQuote();
  if (author && quote) {
    res.send(`${quote} - ${author}`);
  } else {
    res.send("error");
  }
});

app.get('/saved', async (req, res) => {
  try {
		const keys = await redisClient.keys('*')
		const randInt = Math.floor(Math.random() * keys.length); 
		redisClient.get(keys[randInt], (err, resp) => {
			if (err) throw err;
			resp = JSON.parse(resp);
			if (resp) {
			  const { quote, author } = resp;
				res.send(`${quote} - ${author}`);
			} else {
        console.error('no quotes available');
				res.send('error - no quotes available. Add a quote by posting to /save');
			}	
		});
	} catch (e) {
		console.error(e);
		res.send("error");
	}
});

app.post('/save', async (req, res) => {
	const { quote, author } = req.body;
	if (quote && author) {
		const resp = await redisClient.set(uuidv4(), JSON.stringify({ quote, author }));
		if (resp === "OK") {
			res.json({message: 'ok'});
		} else {
			res.json({message: 'err'});
		}
	} else {
		res.json({message: 'bad request'});
	}
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
