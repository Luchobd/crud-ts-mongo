import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "token.01010101";

// Create a JWT token.
export const generateToken = async (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: "30d",
  });
  return jwt;
};

export const verifyToken = (jwt: string) => {
  /**
   * Recibe dos valores.
   * 1. jwt = Token.
   * 2. JWT_SECRET = Clave secreta.
   */
  const isOk =  verify(jwt, JWT_SECRET);
  return isOk;
};
