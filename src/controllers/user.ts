import { Request, Response, RequestHandler } from "express";
// import { getRepository } from "typeorm";
import { TUsers } from "../entity/user";
// import bcrypt from "bcrypt";
// import MySQL from "../mysql/mysql";

export const getUsers: RequestHandler = async (req: Request, res: Response): Promise<Response> => {
    const { connection } = req.body
    try {
        const users = await TUsers.find();
        await connection.close();
        return res.json(users)
    } catch (error) {
        return res.json(error)
    }
};

export const getUserById: RequestHandler = async (req: Request, res: Response): Promise<Response> => {
    const { connection } = req.body
    const id = Number(req.params.id)
    try {
        const users = await TUsers.findOne({ user_id: id });
        await connection.close();
        return res.json(users)
    } catch (error) {
        return res.json(error)
    }
};

export const createUser: RequestHandler = async (req: Request, res: Response) => {
    const { user_name, user_email, user_password } = req.body;
    const { connection } = req.body
    let newUser = new TUsers();
    newUser.user_name = user_name;
    newUser.user_email = user_email;
    newUser.user_password = user_password;
    try {
        const response = await TUsers.save(newUser);
        console.log("RESPONSE CREATE: ", response)
        await connection.close();
        return res.json(response)
    } catch (error) {
        return res.json(error)
    }
};

export const deleteUser: RequestHandler = async (req: Request, res: Response): Promise<Response> => {
    const id = Number(req.params.id)
    const { connection } = req.body
    let userRepository = connection.getRepository(TUsers);
    try {
        const user = await TUsers.findOne({ user_id: id });
        const response = await userRepository.remove(user);
        console.log("RESPONSE DELETE: ", response)
        await connection.close();
        return res.json(response)
    } catch (error) {
        return res.json(error)
    }
}

// export const updateUser: RequestHandler = (req: Request, res: Response) => {
//     const id = req.params.id;
//     const { name, email } = req.body;

//     const query = `UPDATE tusers 
//         SET user_name='${name}', 
//         user_email='${email}' 
//         WHERE user_id = ${id}`
//     MySQL.executeQuery(query, (err: any, result: Object) => {
//         if (err) {
//             res.status(400).json({
//                 ok: false,
//                 error: err
//             })
//         } else {
//             res.json({
//                 ok: true,
//                 result
//             })
//         }
//     })
// };