import { Request, Response } from 'express';

const notFoundMiddleware = (req: Request, res: Response) => {
   res.status(404).json({
      status: '404',
      msg: 'page not found',
   });
};

export { notFoundMiddleware };
