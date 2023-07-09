import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { RequestExt } from "../interfaces/req-ext";

// Proteger Rutas con session "Que no se puedan conectar a la ruta desde el navegador", que este protegida.
export const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    // jwtByUser => nos proporciona el valor que esta en "Bearer: token" (Esto lo puedes buscar desde "Bearer" en el Thunder).
    const jwt = jwtByUser.split(" ").pop();
    const isUser: unknown = verifyToken(jwt as string); // Verificamos que el token sea valido. String (correo electronico de la persona)
    // console.log(isUser);
    if (!isUser) {
      res.status(401).json({ message: "No tienes un JWT valido" });
    } else {
      req.user = isUser;
      console.log({ jwtByUser });
      next();
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
