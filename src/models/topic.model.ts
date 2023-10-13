import { UserInterface } from "../interfaces/user.interface";
import mongoose from "../database";

const schema = new mongoose.Schema({
  name: String,
  description: String,
  subscribers: String,
  unsubscribers: String,
  emails_send_count: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Topic = mongoose.model<UserInterface>("Topics", schema);

export default Topic;
