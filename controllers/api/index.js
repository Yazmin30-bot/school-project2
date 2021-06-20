const router = require('express').Router();
const studentRoutes = require('./studentRoutes');
//const projectRoutes = require('./projectRoutes');

router.use('/students', studentRoutes);
//router.use('/projects', projectRoutes);

module.exports = router;
