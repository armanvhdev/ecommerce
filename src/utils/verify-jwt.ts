import jwt from 'jsonwebtoken';
import { BadRequsetError } from '../errors/badrequest-error';

const verifyToken = async (Bearertoken: string) => {
   if (Bearertoken != '' && !Bearertoken.startsWith('Bearer')) {
      throw new BadRequsetError('توکن خود را چک کنید ');
   }

   const token = Bearertoken.split(' ')[1];
   try {
      const payload = jwt.verify(token, 'secret');
      console.log(payload);
   } catch (error) {
      console.log(error);
   }
};

export { verifyToken };
