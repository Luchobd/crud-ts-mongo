import { Response } from "express";

// Manejador de errores - Exportar la función para manejar los errores.
export const handleHttp = (res: Response, error: string, errorRaw?: any) => {
  console.log(errorRaw);
  res.status(500).send({ error });
};
