import crypto from 'crypto';
const SALT = process.env.SALT || 'not found';

export const escryptPassword = (password) => {
  return crypto.pbkdf2Sync(password, SALT, 10000, 64, 'sha512').toString('hex');
};

