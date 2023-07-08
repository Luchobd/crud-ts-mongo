import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  deleteCar,
  getCar,
  getCars,
  insertCar,
  updateCar,
} from "../services/item";

export const getItem = async (req: Request, res: Response) => {
  const responseInsert = await getCar(req.params.id);
  const data = responseInsert ? responseInsert : "NOT_FOUND";
  res.status(200).send(data);
  try {
  } catch (error: any) {
    handleHttp(res, error);
  }
};

export const getItems = async (req: Request, res: Response) => {
  try {
    const responseInsert = await getCars();
    res.status(200).send(responseInsert);
  } catch (error: any) {
    handleHttp(res, error);
  }
};

export const updateItem = async (req: Request, res: Response) => {
  const responseInset = await updateCar(req.params.id, req.body);
  res.status(200).send(responseInset);
  try {
  } catch (error: any) {
    handleHttp(res, error);
  }
};

export const postItem = async (req: Request, res: Response) => {
  try {
    const responseItem = await insertCar(req.body);
    res.status(200).send(responseItem);
  } catch (error: any) {
    handleHttp(res, error);
  }
};

export const deleteItem = async (req: Request, res: Response) => {
  try {
    const responseItem = await deleteCar(req.params.id);
    res.status(200).send(responseItem);
  } catch (error: any) {
    handleHttp(res, error);
  }
};
