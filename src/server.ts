import dotenv from 'dotenv';
dotenv.config({ path: './config/config.env' });

import { app } from './app';
import { AppDataSource } from './config/db';

const port = process.env.PORT || 3000;
const start = async () => {
   try {
      await AppDataSource.initialize();
      console.log('connected to database');
   } catch (error) {
      console.log(error);
   }
   app.listen(port, () => {
      console.log('connected on port %s', port);
   });
};

start();
