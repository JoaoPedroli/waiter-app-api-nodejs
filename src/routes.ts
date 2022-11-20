import path from "node:path";

import { Router } from "express";
import multer from "multer";
import { createCategories } from "./app/useCases/categories/createCategories";
import { listCategories } from "./app/useCases/categories/listCategories";
import { cancelOrder } from "./app/useCases/orders/cancelOrder";
import { changeOrderStatus } from "./app/useCases/orders/changeOrderStatus";
import { createOrder } from "./app/useCases/orders/createOrder";
import { listOrders } from "./app/useCases/orders/listOrders";
import { createProduct } from "./app/useCases/products/createProduct";
import { listProducts } from "./app/useCases/products/listProducts";
import { listProductsByCategory } from "./app/useCases/products/listProductsByCategory";

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, "..", "uploads"));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

router.get("/categories", listCategories);

router.post("/categories", createCategories);

router.get("/products", listProducts);

router.get("/products/:categoryId", listProductsByCategory);

router.post("/products", upload.single("image"), createProduct);

router.get("/orders", listOrders);

router.post("/orders", createOrder);

router.put("/orders/:orderId", changeOrderStatus);

router.delete("/orders/:orderId", cancelOrder);
