const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth'); // Custom middleware for JWT authentication
const Job = require('../models/Job');

// @route   GET /api/jobs
// @desc    Get all job applications for the logged-in user
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const jobs = await Job.find({ user: req.user.id }).sort({ dateApplied: -1 });
    res.json(jobs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// (Other routes like POST /api/jobs for adding, PUT /api/jobs/:id for updating, DELETE /api/jobs/:id for deleting would also be here)

module.exports = router;
