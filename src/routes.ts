import path from "node:path";

import { Router } from "express";
import multer from "multer";
import { createCategories } from "./app/models/useCases/categories/createCategories";
import { listCategories } from "./app/models/useCases/categories/listCategories";
import { cancelOrder } from "./app/models/useCases/orders/cancelOrder";
import { changeOrderStatus } from "./app/models/useCases/orders/changeOrderStatus";
import { createOrder } from "./app/models/useCases/orders/createOrder";
import { listOrders } from "./app/models/useCases/orders/listOrders";
import { createProduct } from "./app/models/useCases/products/createProduct";
import { listProducts } from "./app/models/useCases/products/listProducts";
import { listProductsByCategory } from "./app/models/useCases/products/listProductsByCategory";

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
