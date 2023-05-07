import { Response } from 'express';

import { createToken } from './sign-jwt';
import { PayloadObject } from './sign-jwt';

interface AttachCookies {
   res: Response;
   user: PayloadObject;
}

const attachCookiesToResponse = (obj: AttachCookies) => {
   const { res, user } = obj;
   const token = createToken(user);
   
   const oneDay = 100 * 60 * 60 * 24;

   res.cookie('token', token, {
      expires: new Date(Date.now() + oneDay),
      httpOnly: true,
   });
};

export { attachCookiesToResponse };
