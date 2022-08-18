import express from "express";
import { userSignup, userLogin } from "../controller/user-controller.js";
import { getProduct } from "../controller/product-controller.js";

const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);
router.get("/products", getProduct);

export default router;
