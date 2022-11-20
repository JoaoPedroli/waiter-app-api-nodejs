import { Request, Response } from "express";
import { Product } from "../../Product";

export async function createProduct(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;
    const { name, description, price, category, ingredients } = req.body;

    const product = await Product.create({
      name,
      description,
      price: Number(price),
      imagePath,
      category,
      ingredients: JSON.parse(ingredients ?? "[]"),
    });

    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
