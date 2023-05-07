import { Request, Response } from 'express';
import { User } from '../entities/User';
import { generateHash } from '../utils/password-hash';
import { StatusCodes } from 'http-status-codes';
import CustomError from '../errors';
import { attachCookiesToResponse } from '../utils';

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

   await user.save();

   const tokenUser = { name: user.name, userId: user.id, role: user.role };

   attachCookiesToResponse({ res, user: tokenUser });

   res.status(StatusCodes.CREATED).json({ tokenUser });
};

const login = async (req: Request, res: Response) => {
   res.send('login user');
};

const logout = async (req: Request, res: Response) => {
   res.send('logout user');
};

export { register, login, logout };
