
import { UserInterface } from '../interfaces/user.interface';
import mongoose from '../database';

const schema = new mongoose.Schema({
  email: String,
  rol: String,
  password: String,
  topics: Array<String>,
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model<UserInterface>('User', schema);

export default User;