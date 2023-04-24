import { StatusCodes } from 'http-status-codes';
import { CustomError } from './custom-error';

class UnAuthorizedError extends CustomError {
   statusCode: number;
   constructor(msg: string, statusCode: number) {
      super(msg,statusCode);
      this.statusCode = StatusCodes.UNAUTHORIZED;
   }
}

export { UnAuthorizedError };
