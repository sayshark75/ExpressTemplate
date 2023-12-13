import express from "express";
import uploader, { multiUploader } from "../middlewares/uploader.middleware";
import uploadsController from "../controllers/uploads.controller";

const router = express.Router();

// Single files
router.post("/file", uploader.single("file"), uploadsController.uploadSingleFile);

// Multiple files, only allowed 8 files per request
router.post("/multi-select", uploader.array("file", 8), uploadsController.uploadMultiFiles);

// Multiple different Files Uploader (check Uploader Middleware)
router.post("/multi-input", multiUploader, uploadsController.uploadMultipleFields);

// Single File Upload to S3 Bucket V2
router.post("/s3-single-file-v2", uploader.single("file"), uploadsController.uploadSingleS3FileV2);

// multiple Files Upload to S3 Bucket V2
router.post("/s3-multi-files-v2", uploader.array("file", 8), uploadsController.uploadMultipleS3FileV2);

// Single File Upload to S3 Bucket V3
router.post("/s3-single-file-v3", uploader.single("file"), uploadsController.uploadSingleS3FileV3);

// multiple Files Upload to S3 Bucket V3
router.post("/s3-multi-files-v3", uploader.array("file", 8), uploadsController.uploadMultipleS3FileV3);

export default router;
