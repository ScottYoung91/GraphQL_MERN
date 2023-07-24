//types
const ClientType = require('../types/client');
const ProjectType = require('../types/project');

//Queries
const projectQueries = require('../queries/project');
const clientQueries = require('../queries/client');

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
