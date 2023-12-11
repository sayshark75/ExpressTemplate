import { Request } from "express";
import multer, { FileFilterCallback, StorageEngine } from "multer";
import { v4 } from "uuid";

// custom Type
export type MulterFilterType = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => void;

// Create Custom Storage to Use, and Customise path/file-name/etc...
const customStorage: StorageEngine = multer.diskStorage({
  // set destination to "uploads"
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  // set customised filename, we using uuid package.
  filename: (req, file, cb) => {
    const { originalname } = file;
    cb(null, `${v4()}-${originalname}`);
  },
});

// Filter-out Filetypes as Images only, mimetype basically image/jpeg or image/png or image/gif
const imageFilter: MulterFilterType = (req, file, cb) => {
  if (file.mimetype.split("/")[0] === "image") {
    cb(null, true);
  } else {
    cb(null, false);
    throw new Error("File Type not Supported");
  }
};

// Configure and Create a new Middleware as Uploader                                       10 MB   X    4 files
const uploader = multer({ storage: customStorage, fileFilter: imageFilter, limits: { fileSize: 10000000, files: 1 } });

// to upload Multiple File Input Fields from Client we use this.
// you can add more as required
const multiUploader = uploader.fields([
  // input name, how many files should accepted,
  { name: "file", maxCount: 1 },
  { name: "image", maxCount: 1 },
]);

export { multiUploader };

export default uploader;
