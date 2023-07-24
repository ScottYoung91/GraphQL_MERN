//types
const ClientType = require('../types/clientType');
const ProjectType = require('../types/projectType');

//Queries
const projectQueries = require('../queries/projectQueries');
const clientQueries = require('../queries/clientQueries');

//Mongoose Models
const Project = require('../models/Project');
const Client = require('../models/Client');

const {
	GraphQLObjectType,
	GraphQLSchema,
	GraphQLID,
	GraphQLList,
} = require('graphql');

//Root Query
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		...projectQueries,
		...clientQueries,
	},
});

module.exports = new GraphQLSchema({
	query: RootQuery,
});
