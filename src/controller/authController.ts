import { Request, Response } from 'express';
import { User } from '../entities/User';
import { generateHash } from '../utils/password-hash';
import { StatusCodes } from 'http-status-codes';
import CustomError from '../errors';
import { attachCookiesToResponse, compareHash } from '../utils';

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
   const { email, password } = req.body;
   if (!email || !password) {
      throw new CustomError.BadRequsetError(
         'please provide email and password'
      );
   }
   const user = await User.findOneBy({ email });
   if (!user) {
      throw new CustomError.UnAuthenticatedError('invalid credetials');
   }

   if (!compareHash(password, user.password)) {
      throw new CustomError.UnAuthenticatedError('invalid credetials');
   }

   const tokenUser = { name: user.name, userId: user.id, role: user.role };
   attachCookiesToResponse({ res, user: tokenUser });

   res.status(StatusCodes.OK).json(tokenUser);
};

const logout = async (req: Request, res: Response) => {
   res.cookie('token', 'logout', {
      httpOnly: true,
      expires: new Date(Date.now()),
   });
   res.status(StatusCodes.OK).json({ msg: 'user logged out!' });
};

export { register, login, logout };
