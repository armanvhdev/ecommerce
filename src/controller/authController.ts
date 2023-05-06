import { Request, Response } from 'express';
import { User } from '../entities/User';
import { generateHash } from '../utils/password-hash';
import { StatusCodes } from 'http-status-codes';
import CustomError from '../errors';
import { createToken } from '../utils/sign-jwt';
import { verifyToken } from '../utils/verify-jwt';

const register = async (req: Request, res: Response): Promise<void> => {
   const { email, name, password } = req.body;

   const passwordHash = generateHash(password);

   const emailAlreadyExists = await User.findOneBy({ email });
   if (emailAlreadyExists) {
      throw new CustomError.BadRequsetError('Email already exists');
   }

   //the first registred user is admin
   const isFirstUser = (await User.count({})) == 0;
   const role = isFirstUser ? 'admin' : 'user';

   const user = User.create({ email, name, password: passwordHash, role });

   const tokenUser = { name: user.name, userId: user.id, role: user.role };

   const token = createToken(tokenUser);
   await user.save();
   res.status(StatusCodes.CREATED).json({ user, token: `Bearer ${token}` });
};

const login = async (req: Request, res: Response) => {
   res.send('login user')
};

const logout = async (req: Request, res: Response) => {
   res.send('logout user');
};

export { register, login, logout };
