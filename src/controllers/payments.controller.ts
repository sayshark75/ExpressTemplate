import { NextFunction, Request, Response } from "express";
import { PaymentDatatypes } from "../Types";
import paymentServices from "../services/payment.service";

const paymentsController = {
  createOrder: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const paymentData: PaymentDatatypes = req.body;
      const createdOrder = await paymentServices.createOrder(paymentData);
      // Save the Order ID in your database, in Orders Table, we need it later
      res.json({ msg: "Order Created", status: true, orderDetails: createdOrder });
    } catch (error) {
      const exception = new Error("Razorpay Payment Failed");
      exception.name = "PaymentFailed";
      next(exception);
    }
  },
};

export default paymentsController;
