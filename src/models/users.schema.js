import mongoose, { Schema } from "mongoose";

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
  "phone": {
    type: String,
    nullable: false,
    required: true
  },
  "address": {
    type: String,
    nullable: false,
    required: true
  },
  "city": {
    type: String,
    nullable: false,
    required: true
  },
  "state": {
    type: String,
    nullable: false,
    required: true
  },
  "role": {
    type: String,
    nullable: false,
    required: true
  },
  "password": {
    type: String,
    nullable: false,
    required: true
  },
  "isSponsor": {
    type: Boolean,
    nullable: false,
    required: true
  },
  "isVolunteer": {
    type: Boolean,
    nullable: false,
    required: true
  },
  "sponsoredPets": {
    type: Array,
    nullable: false,
    required: true
  },
  "adoptedPets": {
    type: Array,
    nullable: false,
    required: true
  }
});

const User = mongoose.model("User", UserSchema);

export default User;