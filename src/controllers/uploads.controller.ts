import { NextFunction, Request, Response } from "express";

const uploadsController = {
  // upload just one file
  uploadSingleFile: (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send({ msg: "Upload Success", status: true });
    } catch (error) {
      const exception = new Error("Unable to Upload Image");
      exception.name = "Uploading-Error";
      next(exception);
    }
  },

  // upload multiple files with one input field
  uploadMultiFiles: (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send({ msg: "Upload Success", status: true });
    } catch (error) {
      const exception = new Error("Unable to Upload Image");
      exception.name = "Uploading-Error";
      next(exception);
    }
  },

  // upload multiple input files, like profile picture + cover photo + pdf document.
  // from different inputs and send to this request to handle.
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
