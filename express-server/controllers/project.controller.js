const Project = require('../models/project');

// Define the methods for use them in the routes
const projectCtrl = {};

projectCtrl.getProjects = async (req, res, next) => {
    const projects = await Project.find();
    res.json(projects);
};

projectCtrl.createProject = async (req, res, next) => {
    const project = new Project({
        name: req.body.name,
        deadline: req.body.deadline,
        client: req.body.client,
        description: req.body.description,
        skills: req.body.skills
    
    });
    await project.save();
    res.json({status: 'Project created'});
};