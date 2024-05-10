import { Request, Response } from "express";
import {
    createUser,
    showUsers,
    updateUser,
    deleteUser,
} from "../seeds/userSeed";

export const create = async (req: Request, res: Response) => {
    const user = await createUser({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        avatar: req.body.avatar,
    });

    return res.status(201).json({
        message: "User created successfully",
        data: user,
    });
};

export const show = async (req: Request, res: Response) => {
    const users = await showUsers();

    return res.status(201).json({
        message: "List of Users",
        data: users,
    });
};

export const update = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const user = await updateUser(
        {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            avatar: req.body.avatar,
        },
        id
    );

    return res.status(201).json({
        message: "User updated successfully",
        data: user,
    });
};

export const remove = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const user = await deleteUser(id);

    return res.status(201).json({
        message: "User deleted successfully",
        data: user,
    });
};