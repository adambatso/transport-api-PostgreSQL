import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import {
    errorMessage, status,
  } from '../helpers/status';
  
  import env from '../../env';
  
  dotenv.config();

  const verifyToken = (req, res, next) => {
    //   const { token } = req.headers;
    let token = null
      const authorization = req.headers['authorization'];
      if(typeof authorization !== 'undefined') {
        
        const bearer = authorization.split(' ');
        token = bearer[1];   
        
    } else {
        //If header is undefined return Forbidden (403)
        errorMessage.error = 'Token not provided';
          return res.status(status.bad).send(errorMessage);
    }
    
      console.log('%c token', 'font-size:20px;color:lime;', req.headers);
      if (!token) {
          errorMessage.error = 'Token not provided';
          return res.status(status.bad).send(errorMessage);
          
      }
console.log('%c In 1283091283901', 'font-size:20px;color:blue;');
      try {
          const decoded = jwt.verify(token, env.secret);
          req.user = {
            email: decoded.email,
            user_id: decoded.user_id,
            is_admin: decoded.is_admin,
            first_name: decoded.first_name,
            last_name: decoded.last_name,
          }
          next();
      }
      catch(e) {
        errorMessage.error = 'Authentication Failed';
        res.status(status.unauthorized).send(errorMessage);
      }
  }

export default verifyToken