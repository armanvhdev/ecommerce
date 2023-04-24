//environment variable
import dotenv from 'dotenv';
import 'express-async-errors';
dotenv.config({ path: './config/config.env' });

//main application
import { app } from './app';

import { AppDataSource } from './config/db';

const port = process.env.PORT || 3000;
const startServer = async () => {
   try {
      await AppDataSource.initialize(); //connecto to database
      console.log('connected to database');
   } catch (error) {
      console.error('Error connecting to database: %s', error);
      process.exit(1);
   }

   app.listen(port, () => {
      console.log('connected on port %s', port);
   });
};

startServer();
