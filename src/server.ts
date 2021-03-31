import express from 'express';
import morgan from "morgan";
import cors from "cors";
import userRouter from "./routes/user";
import taskRouter from "./routes/task";
import { userMiddleware } from './middlewares/user';

export default class Server {
    public app: express.Application;
    public port: number;

    constructor(p: number) {
        this.port = p;
        this.app = express();
        this.app.use(morgan("dev"));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(`/api/v1/usersUrl`, userMiddleware, userRouter)
        this.app.use(`/api/v1/tasksUrl`, userMiddleware, taskRouter)
    }

    static init(p: number) {
        return new Server(p)
    }

    start(callback: any) {
        this.app.listen(this.port, callback)
    }
}
