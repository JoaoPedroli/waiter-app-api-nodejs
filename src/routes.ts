import { Router } from "express";
import { createCategories } from "./app/models/useCases/categories/createCategories";
import { listCategories } from "./app/models/useCases/categories/listCategories";

export const router = Router();

router.get("/categories", listCategories);

router.post("/categories", createCategories);

router.get("/categories/:categoryId/products", (req, res) => {
  res.send("OK");
});

router.get("/products", (req, res) => {
  res.send("OK");
});

router.post("/products", (req, res) => {
  res.send("OK");
});

router.get("/orders", (req, res) => {
  res.send("OK");
});

router.post("/orders", (req, res) => {
  res.send("OK");
});

router.get("/orders/:orderId", (req, res) => {
  res.send("OK");
});

