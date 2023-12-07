import express from "express";
import dotenv from "dotenv";
import paymentsController from "../controllers/payments.controller";

dotenv.config();

const routes = express.Router();

// Your any Middleware Will beadded in Between

// to create a Order according to Products
routes.post("/orders", paymentsController.createOrder);

// Verify the Product Payment capture via webhook
routes.post("/webhook", paymentsController.webhook);

export default routes;
