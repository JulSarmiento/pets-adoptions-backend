import httpStatus from "http-status";

import { User } from "../models/index.js";

export const getUsers = async (req, res, next) => {
  try{
    const users = await User.find();
    res.status(httpStatus.OK).json(users);
  }
  catch(error){
    next(error);
  }
};

export const createNewUser = async (req, res, next) => {
  try{
    const user = await User.create(req.body);
    res.status(httpStatus.CREATED).json(user);
  }
  catch(error){
    next(error);
  }
};
