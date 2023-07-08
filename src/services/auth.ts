import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt } from "../utils/bcrypt.handle";

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
export const loginNewUser = async () => {};
