import httpStatus from "http-status";

const errorHandler = (err, req, res, next) => {
  const { statusCode, message } = err;

  res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    status: statusCode,
    code: httpStatus.INTERNAL_SERVER_ERROR,
    message,
  });
};

export default errorHandler;
