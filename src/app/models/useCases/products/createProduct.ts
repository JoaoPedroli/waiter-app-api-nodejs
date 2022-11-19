import { Request, Response } from "express";
import { Product } from "../../Product";

export async function createProduct(req: Request, res: Response) {
  try {
    const { icon, name } = req.body;

    const category = await Product.create({

    });

    res.json(category);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
