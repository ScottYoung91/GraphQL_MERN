const express = require('express');
const colors = require('colors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');

const connectDB = require('./utils/db');
const schema = require('./schemas/schema');

const port = process.env.PORT || 5000;

const app = express();
connectDB();

app.use(cors());

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: process.env.NODE_ENV === 'development',
	})
);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`.yellow.bold);
});
