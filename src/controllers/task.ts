import { Request, Response, RequestHandler } from "express";
import { TTask } from "../entity/task";
// import { getRepository } from "typeorm";
// import { TUsers } from "../entity/user";
// import bcrypt from "bcrypt";

export const createTask: RequestHandler = async (req: Request, res: Response) => {
    const { connection, task_name, task_description, user_id } = req.body
    try {
        // const id = Number(user_id)
        // let user = await TUsers.findOne({ user_id: id });
        let newTask = new TTask();
        newTask.task_name = task_name;
        newTask.task_description = task_description;
        newTask.user_id = user_id;
        console.log("NEW TASK: ", newTask)
        const response = await TTask.save(newTask);
        console.log("RESPONSE CREATE: ", response)
        await connection.close();
        return res.json(response)
    } catch (error) {
        return res.json(error)
    }
};