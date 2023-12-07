import multer, { StorageEngine } from "multer";
import { v4 } from "uuid";

const customStorage: StorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const { originalname } = file;
    cb(null, `${v4()}-${originalname}`);
  },
});

const uploader = multer({ storage: customStorage });

const multiUploader = uploader.fields([
  { name: "file", maxCount: 1 },
  { name: "image", maxCount: 1 },
]);

export { multiUploader };

export default uploader;
