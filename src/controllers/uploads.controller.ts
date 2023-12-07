import { NextFunction, Request, Response } from "express";

const uploadsController = {
  uploadSingleFile: (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send({ msg: "Upload Success", status: true });
    } catch (error) {
      const exception = new Error("Unable to Upload Image");
      exception.name = "Uploading-Error";
      next(exception);
    }
  },
  uploadMultiFiles: (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send({ msg: "Upload Success", status: true });
    } catch (error) {
      const exception = new Error("Unable to Upload Image");
      exception.name = "Uploading-Error";
      next(exception);
    }
  },
  uploadMultipleFields: (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send({ msg: "Upload Success", status: true });
    } catch (error) {
      const exception = new Error("Unable to Upload Image");
      exception.name = "Uploading-Error";
      next(exception);
    }
  },
};

export default uploadsController;
