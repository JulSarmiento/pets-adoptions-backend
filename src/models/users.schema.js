import mongoose, { Document, Schema } from "mongoose";

const UserSchema = new Schema({
  "username": {
    type: String,
    nullable: false,
    required: true    
  },
  "lastname": {
    type: String,
    nullable: false,
    required: true
  },
  "age": {
    type: Number,
    nullable: false,
    required: true
  },
  "gender": {
    type: String,
    nullable: false,
    required: true
  },
  "email": {
    type: String,
    nullable: false,
    required: true
  },
});