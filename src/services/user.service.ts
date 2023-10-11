import User from "../models/user.model";

export default class UserService {
  async getUserById(_id: string) {
    return await User.findById(_id);
  }

  async getUserByEmail(email: string) {
    return await User.findOne({
      email,
    });
  }
}
