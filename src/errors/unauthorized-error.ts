import { StatusCodes } from 'http-status-codes';
import { CustomError } from './custom-error';

class UnAuthorizedError extends CustomError {
   statusCode: number;
   constructor(msg: string) {
      super(msg);
      this.statusCode = StatusCodes.UNAUTHORIZED;
   }
}

export { UnAuthorizedError };
