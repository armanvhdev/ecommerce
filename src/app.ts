//express
import express from 'express';
const app = express();

//security
import helmet from 'helmet';
import cors from 'cors';
import rateLimiter from 'express-rate-limit';
import { notFoundMiddleware } from './middleware/not-found';
import { errorHandlerMiddleware } from './middleware/error-handler';

app.use(
   express.json(),
   cors(),
   helmet(),
   rateLimiter({
      windowMs: 15 * 60 * 1000,
      max: 100,
   })
);

app.get('/', (req, res) => {
   throw new Error("there is a problem")
   res.send('e-commerce api');
});

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

export { app };
