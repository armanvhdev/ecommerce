import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimiter from 'express-rate-limit';

const app = express();

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
   res.send('e-commerce api');
});

export { app };
