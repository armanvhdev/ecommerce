import { StatusCodes } from 'http-status-codes';
import { CustomError } from './custom-error';

class BadRequsetError extends CustomError {
   statusCode: number;
   constructor(msg: string, statusCode?: number) {
      super(msg, statusCode);
      this.statusCode = StatusCodes.BAD_REQUEST;
   }
}

export { BadRequsetError };
