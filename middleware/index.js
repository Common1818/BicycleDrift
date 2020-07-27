const config = require('config');
const expressJwt = require('express-jwt');

export const isSignedIn = expressJwt({
   secret: config.get('jwtSecret'),
   userProperty: 'auth',
});

export const isAuthenticated = (req, res, next) => {
   let checker = req.profile && req.auth && req.profile._id == req.auth._id;

   if (!checker) {
      return res.status(403).json({
         error: 'ACCESS DENIED',
      });
   }

   next();
};

export const isAdmin = (req, res, next) => {
   if (req.profile.role === 0) {
      return res.status(403).json({
         error: 'ACCESS DENIED',
      });
   }

   next();
};
