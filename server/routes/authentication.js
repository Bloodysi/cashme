const router = require('express').Router();
const { hashSync } = require('bcryptjs');

const User = require('../models/users')


router.post('/register', async (req, res)=> {

  const { username, email, password } = req.body

  const newUser = new User({
    username,
    email,
    password: hashSync(password, 10)
  })

  try {

    const user = await User.find({ email: email })
    console.log(user)
    if(!user) {
      return res.json({
        error: true,
        body: 'Email already active'
      })
    }
    else {
      let user = await newUser.save()
      return res.json({
        error: false,
        body: user
      })
    }

  }
  catch (err) {
    res.json({
      error: true,
      body: err.message
    })
  }

})


module.exports = router;
