import jwt from 'jsonwebtoken';

interface PayloadObject {
   name: string;
   userId: number;
   role: string;
}
const createToken = (obj: PayloadObject) => {
   try {
      const token = jwt.sign(obj, 'secret', {
         expiresIn: '30d',
      });
      return token;
   } catch (error) {
      console.log(error);
   }
};

export { createToken };
