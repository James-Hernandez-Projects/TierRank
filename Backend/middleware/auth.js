const jwt = require('jsonwebtoken');//this will be for the tokens
const config = require('config');//global variables configuration

module.exports = async function(req, res, next) {
  // Get token from header because we want to use the header x-auth-token and store the key in the value
  const token = req.header('x-auth-token');

  // here we want to check to see if the user has a token because if they dont then they should get
  //authorization denied
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // next we have to see if the tocken is verifies and usable
  try {
    await jwt.verify(token, config.get('jwtSecret'), (error, decoded)=>{
      if(error){//if theres an error then that must mean the token is not valid anymore
        res.status(401).json({ msg: 'Token is not valid' });
      }
      else{
        req.user = decoded.user;//if the toekn is valid and the user will be authorized
        next();
      }
    });
  } catch (err) {
    console.error('something wrong with auth middleware')
    res.status(500).json({ msg: 'Server Error' });
  }
};
