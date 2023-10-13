import { Router } from "express";
import TopicController from "../../controllers/topics";

export class TopicRouter {
  topic = new TopicController();
  router: Router;
  constructor() {
    this.router = Router();
    this.init();
  }

  init = () => {
    this.router.post("", this.topic.create);
  };
}

const topicRoutes = new TopicRouter();
topicRoutes.init();
export default topicRoutes.router;
