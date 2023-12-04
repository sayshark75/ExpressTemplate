import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import paymentsController from "../controllers/payments.controller";

dotenv.config();

const routes = express.Router();

// Your any Middleware Will beadded in Between

// to create a Order according to Products
routes.post("/orders", paymentsController.createOrder);

// Verify the Product Payment signature
routes.post("/payment_verify", (req: Request, res: Response, next: NextFunction) => {
  try {
    // we will use the Order ID from DB and razorpay_payment_id from client.
  } catch (error) {
    const exception = new Error("Payment Verification Failed");
    exception.name = "PaymentSignatureFailed";
    next(exception);
  }
});

export default routes;
