const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();

mongoose.connect('mongodb://localhost/model-database')
	.then(db => console.log('Conectado'))
	.catch(err => console.error(err));

// Settings
app.set('port', 3000);

// Middlewares
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());

// Routes 
app.use('/products',require('./server/products'));

// Static
console.log(__dirname);
app.use(express.static(__dirname + '/public'));

// Listening
app.listen(app.get('port'), () => {
	console.log('Server on port',app.get('port'));
})
