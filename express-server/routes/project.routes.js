const express = require('express');
const router = express.Router();

const projectCtrl = require('../controllers/project.controller');

router.get('/', projectCtrl.getProjects);
router.post('/', projectCtrl.createProject);
router.put('/:id', projectCtrl.editProject);

module.exports = router;