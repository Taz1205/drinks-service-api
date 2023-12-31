import express from "express";
import * as coffeeController from "../controllers/coffee/coffee_controller";
import * as teaController from "../controllers/tea/tea_controller";

export const router = express.Router();

router.get("/coffee", coffeeController.getCoffee);

router.get("/tea", teaController.getTea);
