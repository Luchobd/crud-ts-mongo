import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

export const getItem = (req: Request, res: Response) => {
  try {
  } catch (error: any) {
    handleHttp(res, error);
  }
};

export const getItems = (req: Request, res: Response) => {
  try {
  } catch (error: any) {
    handleHttp(res, error);
  }
};

export const updateItem = (req: Request, res: Response) => {
  try {
  } catch (error: any) {
    handleHttp(res, error);
  }
};

export const postItem = (req: Request, res: Response) => {
  try {
    res.send(req.body)
  } catch (error: any) {
    handleHttp(res, error);
  }
};

export const deleteItem = (req: Request, res: Response) => {
  try {
  } catch (error: any) {
    handleHttp(res, error);
  }
};
