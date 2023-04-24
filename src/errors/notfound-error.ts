import { StatusCodes } from 'http-status-codes';
import { CustomError } from './custom-error';

class NotFoundError extends CustomError {
   statusCode: number;
   constructor(msg: string, statusCode: number) {
      super(msg,statusCode);
      this.statusCode = StatusCodes.NOT_FOUND;
   }
}

export { NotFoundError };
