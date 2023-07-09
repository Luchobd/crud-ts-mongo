import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { RequestExt } from "../interfaces/req-ext";

export const getItemsOrder = (req: RequestExt, res: Response) => {
  try {
    res.send({
      data: "ESTO SOLO LO VE LAS PERSONAS CON SESIONES ES DECIR QUE TENGAN JWT",
      user: req.user,
    });
  } catch (error: any) {
    handleHttp(res, error);
  }
};
