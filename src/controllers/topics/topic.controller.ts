import TopicService from "../../services/topics/topic.service";
import { Request, Response } from "express";
import BaseError from "../../shared/errors/base";
import { ErrorCodes, ErrorMessages } from "../../shared/errors/errors";
import { TopicInterface } from "src/interfaces/topic.interface";

class TopicController {
  private topicService: TopicService;

  constructor() {
    this.topicService = new TopicService();
  }

  create = async (
    req: Request,
    res: Response
  ): Promise<Response<void> | Error> => {
    try {
      const { name, description } = req.body;
      const topic = {
        name,
        description,
        subscribers: 0,
        unsubscribers: 0,
        emails_send_count: 0,
      };
      await this.topicService.createTopic(topic);
      return res.status(200).send();
    } catch (error) {
      return res.status(500).send({
        error: new BaseError(
          ErrorCodes.GENERIC_ERROR,
          500,
          ErrorMessages.GENERIC_ERROR
        ),
      });
    }
  };

  getList = async (
    req: Request,
    res: Response
  ): Promise<Response<Array<TopicInterface>> | Error> => {
    try {
      const { limit = 9, offset = 0 } = req.query;      
      const topicsList = await this.topicService.getTopics(
        Number(limit),
        Number(offset)
      );
      return res.status(200).send(topicsList);
    } catch (error) {
      return res.status(500).send({
        error: new BaseError(
          ErrorCodes.GENERIC_ERROR,
          500,
          ErrorMessages.GENERIC_ERROR
        ),
      });
    }
  };
}

export default TopicController;
