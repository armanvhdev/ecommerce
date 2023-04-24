import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
   type: 'postgres',
   host: 'localhost',
   port: 5432,
   username: 'postgres',
   password: '1234',
   database: 'ecommerce',
   synchronize: true,
   entities: [],
});
