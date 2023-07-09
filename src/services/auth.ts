import { encrypt, verified } from "../utils/bcrypt.handle";
import UserModel from "../models/user";
import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import { generateToken } from "../utils/jwt.handle";

export const registerNewUser = async ({ email, password, name }: User) => {
  const checkIn = await UserModel.findOne({ email });
  if (checkIn) return "ALREADY_USER"; // Busca si existe el correo y de esa forma no se repiten.
  // incriptar clave...
  const passHast = await encrypt(password);
  console.log("pass", checkIn);

  const registerNewUser = await UserModel.create({
    email,
    password: passHast,
    name,
  });
  return registerNewUser;
};

export const loginUser = async ({ email, password }: Auth) => {
  const checkIn = await UserModel.findOne({ email });
  if (!checkIn) return "NOT_FOUND_USER";

  const passwordHast = checkIn.password; // password encriptado
  const isCorrect = await verified(password, passwordHast); // valor booleam

  if (!isCorrect) return "PASSWORD_INCORRECT";

  const token = await generateToken(checkIn.email);

  const data = {
    token: token,
    user: checkIn,
  };

  return data;
};
