import { Router } from "express";
import { getItemsOrder } from "../controllers/order";
import { checkJwt } from "../middleware/session";

/**
 * Esta ruta solo puede acceder las personas que tienen sesión activa!
 * que tengan un JWT valido.
 */

const router = Router();

router.get("/", checkJwt, getItemsOrder);

export { router };
