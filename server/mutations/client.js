const Client = require('../models/Client');
const Project = require('../models/Project');

const { GraphQLID, GraphQLNonNull, GraphQLString } = require('graphql');
const ClientType = require('../types/client');

const clientMutations = {
	addClient: {
		type: ClientType,
		args: {
			name: { type: new GraphQLNonNull(GraphQLString) },
			email: { type: new GraphQLNonNull(GraphQLString) },
			phone: { type: new GraphQLNonNull(GraphQLString) },
		},
		resolve(parent, args) {
			const client = new Client({
				name: args.name,
				email: args.email,
				phone: args.phone,
			});

			return client.save();
		},
	},
	// Delete a client
	deleteClient: {
		type: ClientType,
		args: {
			id: { type: new GraphQLNonNull(GraphQLID) },
		},
		resolve(parent, args) {
			Project.find({ clientId: args.id }).then((projects) => {
				projects.forEach((project) => {
					project.deleteOne();
				});
			});

			return Client.findByIdAndRemove(args.id);
		},
	},
};

module.exports = clientMutations;
