const router = require('express').Router();
const studentRoutes = require('./studentRoutes');
const professorRoutes = require('./professorRoutes');
//const projectRoutes = require('./projectRoutes');

router.use('/students', studentRoutes);
router.use('/professors', professorRoutes);
//router.use('/projects', projectRoutes);

module.exports = router;
