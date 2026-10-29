import User from "../models/User";

class userService {
  async Create(email, password) {
    try {
      const newUser = new User({
        email,
        password,
      });
      await newUser.save();
    } catch (error) {
      console.log(error);
    }
  }
}

export default new userService();
