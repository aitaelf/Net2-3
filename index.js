const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
	res
		.status(200)
		.send('Hello, Express.js');
});

app.get('/hello', (req, res) => {
	res
		.status(200)
		.send('Hello stranger!');
});

app.get('/hello/:name', (req, res) => {
	res
		.status(200)
		.send(`Hello, ${req.params.name}!`);
});

app.all('/sub/*', (req, res) => {
	res
		.status(200)
		.send(`You requested URI: ${req.hostname}${req.url}`);
});

app.post('/post', (req, res) => {
	if (Object.keys(req.body).length > 0) {
		res.json(req.body);
	} else {
		res.sendStatus(404);
	}
});


app.listen(port, () => {
	console.log('Server enabled on port ' + port);
});