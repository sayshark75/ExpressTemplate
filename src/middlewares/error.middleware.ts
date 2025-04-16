import { NextFunction, Request, Response } from "express";

// Define the type for the error handler function
export type ErrorHandlerType = (err: Error, req: Request, res: Response, next: NextFunction) => void;

// Implement the error handler function
export const errorHandler: ErrorHandlerType = (err, req, res, next) => {
  if (err.message) {
    return res.status(500).json({
      error: {
        message: err.message,
        status: false,
      },
    });
  }

  // Send the error response with the appropriate status code and error details
  res.status(500).json({
    error: {
      message: err,
      status: false,
    },
  });
};
