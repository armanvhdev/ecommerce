//express
import express from 'express';
const app = express();


//security
import helmet from 'helmet';
import cors from 'cors';
import rateLimiter from 'express-rate-limit';

//logger
import morgan from 'morgan';

import cookieParser from 'cookie-parser';


//routes
import { routesHandler } from './routes/router';

import { notFoundMiddleware } from './middleware/not-found';
import { errorHandlerMiddleware } from './middleware/error-handler';



if (process.env.NODE_ENV == 'Developer') {
   app.use(morgan('tiny'));
}
app.use(
   express.json(),
   cookieParser('secret'),
   cors(),
   helmet(),
   rateLimiter({
      windowMs: 15 * 60 * 1000,
      max: 100,
   })
);

app.get('/', (req, res) => {
   res.send('e-commerce api');
});

app.get('/api/v1', (req, res) => {
   console.log(req.signedCookies);
   res.send('e-commerce api');
});

app.use('/api/v1', routesHandler);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

export { app };
