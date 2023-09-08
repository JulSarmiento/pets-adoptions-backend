import express from 'express';
import httpStatus from 'http-status';

import userRouter from './users.router.js';

const router = express.Router();


router
  .get("/health", (_req, res) => {
    res.status(httpStatus.OK).json({
      success: true,
      status: "up",
      environment: process.env.ENVIRONMENT || "not found",
    });
  })
  .use("/users", userRouter);
  
export default router;