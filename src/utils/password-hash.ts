import bcrypt, { hash } from 'bcrypt';

const generateHash = (pass: string) => {
   const salt = bcrypt.genSaltSync();
   const hash = bcrypt.hashSync(pass, salt);
   return hash;
};

export { generateHash };
