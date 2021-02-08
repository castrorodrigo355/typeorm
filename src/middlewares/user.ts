import { Request, Response, RequestHandler } from "express";
import { createConnection } from "typeorm";

export const userMiddleware: RequestHandler = (req: Request, res: Response, next: any)=> {
    createConnection()
        .then(connection => {
            console.log("OPEN DATABASE CONECTION")
            req.body.connection = connection;
            next();
        })
        .catch(error => {
            res.json({
                ok: false,
                message: "VIEJO... NO CUMPLE LOS REQUISITOS"
            })
        })
  }