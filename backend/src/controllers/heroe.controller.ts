import { Request, Response } from "express";

//imp api
import { api } from "../services/index";

export const getHeroe = (req: Request, res: Response) => {
  res.send(api);
};
