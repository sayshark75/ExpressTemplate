import express from "express";
import uploader, { multiUploader } from "../middlewares/uploader.middleware";
import uploadsController from "../controllers/uploads.controller";

const router = express.Router();

// Single Image
router.post("/file", uploader.single("file"), uploadsController.uploadSingleFile);

// Multiple Images, only allowed 8 images per request
router.post("/multi-select", uploader.array("file", 8), uploadsController.uploadMultiFiles);

// Multiple different Files Uploader (check Uploader Middleware)
router.post("/multi-input", multiUploader, uploadsController.uploadMultipleFields);

export default router;
