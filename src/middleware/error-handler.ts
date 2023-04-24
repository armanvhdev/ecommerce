import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes/build/cjs/status-codes';

import { CustomError } from '../errors/custom-error';

const errorHandlerMiddleware = async (
   err: CustomError,
   req: Request,
   res: Response,
   next: NextFunction
) => {
   let customError = {
      statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
      msg: err.msg || 'Somthing went wrong try again later',
   };

   return res.status(customError.statusCode).json({ msg: customError.msg });
};

export { errorHandlerMiddleware };
