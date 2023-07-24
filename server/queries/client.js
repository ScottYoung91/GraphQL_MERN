//types
const ClientType = require('../types/client');

//Mongoose Models
const Client = require('../models/Client');

const { GraphQLID, GraphQLList } = require('graphql');

const clientQueries = {
	clients: {
		type: new GraphQLList(ClientType),
		resolve(parent, args) {
			return Client.find();
		},
	},
	client: {
		type: ClientType,
		args: { id: { type: GraphQLID } },
		resolve(parent, args) {
			return Client.findById(args.id);
		},
	},
};

module.exports = clientQueries;
