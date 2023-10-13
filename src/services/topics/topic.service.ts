import { TopicInterface } from "../../interfaces/topic.interface";
import Topic from "../../models/topic.model";

export default class TopicService {
  async createTopic(topic: TopicInterface) {
    const newTopic = new Topic(topic);
    return await newTopic.save();
  }

  async getTopics() {
    return Topic.find();
  }
}
