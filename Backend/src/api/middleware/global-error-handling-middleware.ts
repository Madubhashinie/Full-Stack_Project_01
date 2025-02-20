import { NextFunction } from "express";

const globalErrorHandlingMiddleware = (error: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  if (error.name === "NotFoundError") {
    return res
      .status(404)
      .json({
        message: error.message,
      })
      .send();
  } else {
    return res
      .status(500)
      .json({
        message: error.message,
      })
      .send();
  }
};

export default globalErrorHandlingMiddleware;