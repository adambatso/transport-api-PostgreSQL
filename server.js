import express from 'express';
import 'babel-polyfill';
import cors from 'cors';
import env from './env';

import usersRoute from './app/routes/userRoute';
import bodyParser from "body-parser"
// import seedRoute from './app/routes/seedRoute';
import adminRoute from './app/routes/adminRoute';
import tripRoute from './app/routes/tripRoute';
import busRoute from './app/routes/busRoute';
import bookingRoute from './app/routes/bookingRoute';

// import familyRoute from './app/routes/familyRoute';
import verifyToken from './app/middlewares/verifyAuth'
const app = express();

// Add middleware for parsing URL encoded bodies (which are usually sent by browser)
app.use(cors());
// Add middleware for parsing JSON and urlencoded data and populating `req.body`
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/v1', usersRoute);
//TODO:: this is an option to use the middleware 
// app.use(verifyToken);
// app.use('/api/v1', familyRoute);
// app.use('/api/v1', seedRoute);
app.use('/api/v1', adminRoute);
app.use('/api/v1', tripRoute);
app.use('/api/v1', busRoute);
app.use('/api/v1', bookingRoute);

console.log('%c env', 'font-size:20px;color:lime;', env);
app.listen(4004).on('listening', () => {
  console.log(`🚀 are live on ${env.port}`);
});


export default app;