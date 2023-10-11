import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import logger from "morgan";
import helmet from "helmet";
import UserRouter from './routes/v0/user.routes';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }
  private middleware() {
    this.express.use(logger("dev"));
    this.express.use(helmet());
    this.express.use(express.json());
    this.express.use(cors());
  }

  private routes() {
    const router: express.Router = express.Router();
    router.get("/", (req: express.Request, res: express.Response) => {
      res.json({
        message: "Hello Stori team!",
      });
    });
    this.express.use("/", router);
    this.express.use('/v0/users', UserRouter);
  }
}

export default new App().express;
