const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.route('/')
    // GET /api/users - Get all users
    .get(async (req, res) => { 
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving users' });
    }
  })
  // POST /api/users - Create a new user
  .post(async (req,res) => { 
    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.redirect('/api/users')
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
  })
  .put()
  .patch()
  .delete()
  
module.exports = router;
