import { StatusCodes } from 'http-status-codes';
import { CustomError } from './custom-error';

class NotFoundError extends CustomError {
   statusCode: number;
   constructor(msg: string) {
      super(msg);
      this.statusCode = StatusCodes.NOT_FOUND;
   }
}

export { NotFoundError };
