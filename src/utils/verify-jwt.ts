import jwt from 'jsonwebtoken';

const verifyToken = async (token: string) => jwt.verify(token, 'secret')

export { verifyToken };
