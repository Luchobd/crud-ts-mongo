import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item";

export const getOrders = async (item: Car) => {
  const responseInsert = await ItemModel.create(item);
  return responseInsert;
};
