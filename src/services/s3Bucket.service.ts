import { S3 } from "aws-sdk";
import { PutObjectCommand, PutObjectCommandInput, S3Client } from "@aws-sdk/client-s3";
import { PutObjectRequest } from "aws-sdk/clients/s3";
import dotenv from "dotenv";
import { v4 } from "uuid";

dotenv.config();

const s3BucketService = {
  s3UploadSingleV2: async (file: Express.Multer.File) => {
    const s3Instance = new S3();
    const params: PutObjectRequest = {
      Bucket: process.env.AWS_BUCKET_NAME || "",
      Body: file.buffer,
      Key: `uploads/${v4()}-${file.originalname}`,
    };
    return await s3Instance.upload(params).promise();
  },

  s3UploadMultipleV2: async (files: Express.Multer.File[]) => {
    const s3Instance = new S3();

    const params: PutObjectRequest[] = files.map((file) => {
      return {
        Bucket: process.env.AWS_BUCKET_NAME || "",
        Body: file.buffer,
        Key: `uploads/${v4()}-${file.originalname}`,
      };
    });
    return await Promise.all(params.map((param) => s3Instance.upload(param).promise()));
  },

  s3UploadSingleV3: async (file: Express.Multer.File) => {
    const params: PutObjectCommandInput = {
      Bucket: process.env.AWS_BUCKET_NAME || "",
      Body: file.buffer,
      Key: `uploads/${v4()}-${file.originalname}`,
    };
    const s3Instance = new S3Client();
    const uploadResult = await s3Instance.send(new PutObjectCommand(params));
    const result = {
      Location: `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${encodeURIComponent(
        typeof params.Key === "string" ? params.Key : ""
      )}`,
      ETag: uploadResult.ETag,
      ServerSideEncryption: uploadResult.ServerSideEncryption,
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: params.Key,
    };
    return result;
  },

  s3UploadMultipleV3: async (files: Express.Multer.File[]) => {
    const s3Instance = new S3Client();

    const params: PutObjectCommandInput[] = files.map((file) => {
      return {
        Bucket: process.env.AWS_BUCKET_NAME || "",
        Body: file.buffer,
        Key: `uploads/${v4()}-${file.originalname}`,
      };
    });
    return await Promise.all(
      params.map(async (param) => {
        const uploadResult = await s3Instance.send(new PutObjectCommand(param));
        const result = {
          Location: `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${encodeURIComponent(
            typeof param.Key === "string" ? param.Key : ""
          )}`,
          ETag: uploadResult.ETag,
          ServerSideEncryption: uploadResult.ServerSideEncryption,
          Bucket: process.env.AWS_BUCKET_NAME,
          Key: param.Key,
        };
        return result;
      })
    );
  },
};

export default s3BucketService;
