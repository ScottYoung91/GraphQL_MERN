//types
const ProjectType = require('../types/projectType');

//Mongoose Models
const Project = require('../models/Project');

const { GraphQLID, GraphQLList } = require('graphql');

const projectQueries = {
	projects: {
		type: new GraphQLList(ProjectType),
		resolve(parent, args) {
			return Project.find();
		},
	},
	project: {
		type: ProjectType,
		args: { id: { type: GraphQLID } },
		resolve(parent, args) {
			return Project.findById(args.id);
		},
	},
};

module.exports = projectQueries;
