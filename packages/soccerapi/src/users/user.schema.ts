import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: String,
  bornDate: String,
  deleted: Boolean,
  actived: Boolean,
  updated: String,
});
