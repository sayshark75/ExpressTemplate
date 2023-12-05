import Razorpay from "razorpay";
import { PaymentDatatypes } from "../Types";
import { IncomingHttpHeaders } from "http";

const paymentServices = {
  createOrder: async (paymentData: PaymentDatatypes) => {
    if (process.env.RAZORPAY_KEY && process.env.RAZORPAY_SECRET) {
      const instance = new Razorpay({ key_id: process.env.RAZORPAY_KEY, key_secret: process.env.RAZORPAY_SECRET });

      const createdOrder = await instance.orders.create(paymentData);
      return createdOrder;
    }
  },
  // choose Specific Data from Req.body and headers
  // create their specific Types and use them here.
  manageWebHookData: (body: any, headers: IncomingHttpHeaders) => {
    console.log("headers: ", headers);
    console.log("body: ", body);
    // Do whatever with the data, eg. store in DB or anything
    return true;
  },
};

export default paymentServices;
