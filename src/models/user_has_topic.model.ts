import { UserInterface } from "../interfaces/user.interface";
import mongoose from "../database";

const schema = new mongoose.Schema({
  user_id: String,
  topic_id: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const UserHasTopic = mongoose.model<UserInterface>("user_has_topic", schema);

export default UserHasTopic;
