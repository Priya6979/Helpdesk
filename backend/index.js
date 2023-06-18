const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const persons = [];
console.log(persons);
app.post('/signup', (req, res) => {
	console.log('hdhdhh', req.body);
	res.setHeader("Access-Control-Allow-Credentials","true");
	persons.push(req.body);
	console.log(persons);
	res.status(200).json({ message: 'successfully registered' });
});

app.listen(4000, () => {
	console.log('SERVER is Running Successfully');
});
