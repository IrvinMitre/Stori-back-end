import { TopicInterface } from "../../interfaces/topic.interface";
import Topic from "../../models/topic.model";

export default class TopicService {
  async createTopic(topic: TopicInterface) {
    const newTopic = new Topic(topic);
    return await newTopic.save();
  }

  async getTopics(limit: number, offset: number) {
    const count = await Topic.count()
    const topics = await Topic.find().skip(offset).limit(limit);
    return {count, limit, offset, topics};
  }
}
