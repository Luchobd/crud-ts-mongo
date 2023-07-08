// Incriptado de contraseña
import { hash, compare } from "bcryptjs";

export const encrypt = async (plainTextPassword: string) => {
  // hash recibe dos valores: 
  // 1. la contraseña debe ser en texto plano y muy importante pasar el valor a string. Es decir usar el metodo "toString()"  
  // 2. El segundo valor es un numero para aumentar el nivel del hast. Normalmente se coloca 8 o 10 para no dañar mucho el performance.
  
  const passwordHast = await hash(plainTextPassword.toString(), 8);
  return passwordHast;
};

export const verified = async () => {};
