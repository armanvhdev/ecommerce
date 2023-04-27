import { StatusCodes } from 'http-status-codes';
import { CustomError } from './custom-error';

class BadRequsetError extends CustomError {
   statusCode: number;
   constructor(msg: string) {
      super(msg);
      this.statusCode = StatusCodes.BAD_REQUEST;
   }
}

export { BadRequsetError };
