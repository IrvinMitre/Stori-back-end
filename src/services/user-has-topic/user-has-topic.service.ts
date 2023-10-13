import { UserHasTopicInterface } from "src/interfaces/user_has_topic.interface";
import UserHasTopic from "../../models/user_has_topic.model";

export default class UserHasTopicService {

  async createUserHasTopic(userHasTopic: UserHasTopicInterface) {
    const newUser = new UserHasTopic(userHasTopic);
    return await newUser.save();
  }
}
