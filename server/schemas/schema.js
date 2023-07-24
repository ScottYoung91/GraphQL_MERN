//Queries
const projectQueries = require('../queries/project');
const clientQueries = require('../queries/client');

//Mutations
const clientMutations = require('../mutations/client');
const projectMutations = require('../mutations/project');

const { GraphQLObjectType, GraphQLSchema } = require('graphql');

//Root Query
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		...projectQueries,
		...clientQueries,
	},
});
const mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		...clientMutations,
		...projectMutations,
	},
});

module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation,
});
