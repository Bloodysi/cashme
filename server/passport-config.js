const LocalStrategy = require('passport-local')
const User = require('./models/users')
const { compare } = require('bcryptjs')

function initialize(passport){

  passport.use('login', new LocalStrategy(async (username, password, done)=> {

    const user = await User.find(user => user.username === username)
    if(user){
      
      try {
        if(await compare(password, user.password)){
          done(null, user)
        }
        else {
          done(null, false)
        }
      } catch (e) {
        done(e)
      }

    }
    else {
      done(null, false)
    }

  }))

  passport.serializeUser((user, done)=> done(null, user))

  passport.deserializeUser(async (id, done)=> {
    const user = await User.findById(id)
    if(user){
      done(null, user)
    }
    else{
      done(null, false)
    }
  })

}