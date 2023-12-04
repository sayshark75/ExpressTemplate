import Razorpay from "razorpay";
import { PaymentDatatypes } from "../Types";

const paymentServices = {
  createOrder: async (paymentData: PaymentDatatypes) => {
    if (process.env.RAZORPAY_KEY && process.env.RAZORPAY_SECRET) {
      const instance = new Razorpay({ key_id: process.env.RAZORPAY_KEY, key_secret: process.env.RAZORPAY_SECRET });

      const createdOrder = await instance.orders.create(paymentData);
      return createdOrder;
    }
  },
};

export default paymentServices;
