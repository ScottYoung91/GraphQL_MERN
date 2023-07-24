const express = require('express');
const colors = require('colors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');

const connectDB = require('./utils/db');
const schema = require('./schemas/schema');

const port = process.env.PORT || 5000;

const app = express();
connectDB();

app.use(
	'/graphiql',
	graphqlHTTP({
		schema,
		graphiql: process.env.NODE_ENV === 'development',
	})
);

app.listen(5000, console.log(`Listening on port ${port}`));
