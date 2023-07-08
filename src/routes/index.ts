import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();


// Esta funcion permite eliminar todos los valores despues del punto.
const cleanFileName = (fileName: string) => {
  const file = fileName.split(".").shift();
  return file;
};

// Esta funcion permite realizar la conexion de todas las rutas que sean creadas desde la carpeta "routes".
readdirSync(PATH_ROUTER).filter((fileName) => {
  console.log("Array de rutas", readdirSync(PATH_ROUTER))
  const cleanName = cleanFileName(fileName);
  if (cleanName !== "index") {
    import(`./${cleanName}`).then((moduleRouter) => {
      console.log(`Se esta cargando la ruta... /${cleanName}`);
      router.use(`/${cleanName}`, moduleRouter.router);
    });
  }
});

export { router };
