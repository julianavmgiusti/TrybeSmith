import jwt, { Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const tokenjwt = { expiresIn: '24h' };

const SECRET: Secret = process.env.JWT_SECRET || '123';

function createToken(name:string) {
  const token = jwt.sign({
    name, 
  }, SECRET, tokenjwt);
  return token;
}

export default createToken;