import { NextFunction, Request, Response } from "express";
import s3BucketService from "../services/s3Bucket.service";

const uploadsController = {
  // upload just one file to this server
  uploadSingleFile: (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send({ msg: "Upload Success", status: true });
    } catch (error) {
      const exception = new Error("Unable to Upload Image");
      exception.name = "Uploading-Error";
      next(exception);
    }
  },

  // upload multiple files with one input field, to this server
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
  // from different inputs and send to this request to handle. only to this server
  uploadMultipleFields: (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send({ msg: "Upload Success", status: true });
    } catch (error) {
      const exception = new Error("Unable to Upload Image");
      exception.name = "Uploading-Error";
      next(exception);
    }
  },
  // upload single file to S3 bucket via aws-sdk V2
  uploadSingleS3FileV2: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const file = req.file;
      if (file) {
        const result = await s3BucketService.s3UploadSingleV2(file);
        // Perform Database Operation on the Results
        res.send({ msg: "Upload Success", status: true, result });
      } else {
        const exception = new Error("File is Undefined");
        exception.name = "Uploading-Error";
        next(exception);
      }
    } catch (error) {
      const exception = new Error("Unable to Upload Image");
      exception.name = "Uploading-Error";
      next(exception);
    }
  },
  // upload Multiple files to S3 bucket via aws-sdk V2
  uploadMultipleS3FileV2: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const files = req.files;
      if (files && files instanceof Array) {
        const results = await s3BucketService.s3UploadMultipleV2(files);
        // Perform Database Operation on the Results
        res.send({ msg: "Upload Success", status: true, results });
      } else {
        const exception = new Error("File is Undefined");
        exception.name = "Uploading-Error";
        next(exception);
      }
    } catch (error) {
      const exception = new Error("Unable to Upload Image");
      exception.name = "Uploading-Error";
      next(exception);
    }
  },
  // upload single file to S3 bucket via aws-sdk V3
  uploadSingleS3FileV3: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const file = req.file;
      if (file) {
        const result = await s3BucketService.s3UploadSingleV3(file);
        // Perform Database Operation on the Results
        res.send({ msg: "Upload Success", status: true, result });
      } else {
        const exception = new Error("File is Undefined");
        exception.name = "Uploading-Error";
        next(exception);
      }
    } catch (error) {
      const exception = new Error("Unable to Upload Image");
      exception.name = "Uploading-Error";
      next(exception);
    }
  },
  // upload Multiple files to S3 bucket via aws-sdk V3
  uploadMultipleS3FileV3: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const files = req.files;
      if (files && files instanceof Array) {
        const results = await s3BucketService.s3UploadMultipleV3(files);
        // Perform Database Operation on the Results
        res.send({ msg: "Upload Success", status: true, results });
      } else {
        const exception = new Error("File is Undefined");
        exception.name = "Uploading-Error";
        next(exception);
      }
    } catch (error) {
      const exception = new Error("Unable to Upload Image");
      exception.name = "Uploading-Error";
      next(exception);
    }
  },
};

export default uploadsController;
