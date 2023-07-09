// Incriptado de contraseña
import { hash, compare } from "bcryptjs";

// Funcion "hash" Que encripta las claves para ser guardadas. 
export const encrypt = async (plainTextPassword: string) => {
  // hash recibe dos valores: 
  // 1. la contraseña debe ser en texto plano y muy importante pasar el valor a string. Es decir usar el metodo "toString()"  
  // 2. El segundo valor es un numero para aumentar el nivel del hast. Normalmente se coloca 8 o 10 para no dañar mucho el performance.
  const passwordHast = await hash(plainTextPassword.toString(), 8);
  return passwordHast;
};

// Funcion "verified" que verifica y compara las contraseñas encriptadas. Para poder aceptar cuando una persona ingrese su contraseña.
export const verified = async (plainTextPassword: string, hashPassword: string) => {
  const isCorrect = await compare(plainTextPassword.toString(), hashPassword);
  return isCorrect; // Retorna un valor booleano.
};
