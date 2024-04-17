const validateUser = (req, res, next) => {
  try{
    if (req.session && req.session.userId) {
      return res.json({ isAuthenticated: true, user: { userId: req.session.userId } });
    } else {
       res.json({ isAuthenticated: false});
    }
  } catch( error) {
    next(error)
  }
   
    };

module.exports = { validateUser }