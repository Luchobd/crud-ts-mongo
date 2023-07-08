import { Request, Response } from "express";
import {  registerNewUser } from "../services/auth";

export const registerCtrl = async (req: Request, res: Response) => {
  try {
    const responseUser = await registerNewUser(req.body);
    res.status(200).send(responseUser);
  } catch (error: any) {
    res.status(500).json({error: error.message});
  }
};
export const loginCtrl = async (req: Request, res: Response) => {};
