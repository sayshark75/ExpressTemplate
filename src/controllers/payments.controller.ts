import { NextFunction, Request, Response } from "express";
import { PaymentDatatypes } from "../global";
import paymentServices from "../services/payment.service";
import asyncHandler from "express-async-handler";

const paymentsController = {
  createOrder: asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const paymentData: PaymentDatatypes = req.body;
    const createdOrder = await paymentServices.createOrder(paymentData);
    // Save the Order ID in your database, in Orders Table, we need it later
    res.json({ msg: "Order Created", status: true, orderDetails: createdOrder });
  }),
  webhook: asyncHandler((req: Request, res: Response, next: NextFunction) => {
    console.log("req.body: ", req.body);
    console.log("req.headers: ", req.headers);
    // manage data of razorpay webhook, eg. store into DB, etc.
    // Modify this service as per your needs
    paymentServices.manageWebHookData(req.body, req.headers);
    res.send({ msg: "Webhook Payment Captured", status: true });
  }),
};

export default paymentsController;
