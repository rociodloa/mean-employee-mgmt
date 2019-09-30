const  mongoose = require('mongoose');
const { Schema } = mongoose;

const ProjectSchema = new Schema ({
    name: { type: String, required: true },
    deadline: { type: Date, required: true },
    client: { type: String, required: true },
    description: { type: String, required: false },
    skills: { type: String, required: true }
});

module.exports = mongoose.model('Project', ProjectSchema);