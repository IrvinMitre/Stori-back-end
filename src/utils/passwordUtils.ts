import bcrypt from 'bcrypt';

export const verifyPassword = async (
  password: string,
  hashedPassword: string
) => {
  return bcrypt.compare(password, hashedPassword);
};

export const hashPassword = async (password: string) => {
  return bcrypt.hashSync(password, Number(`${process.env.SALT_ROUNDS || 10}`));
};
