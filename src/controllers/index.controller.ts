import { Request, Response } from 'express';
import { pool } from '../db/db';
import { QueryResult } from 'pg';


export const createUser = async (req: Request, res: Response) => {
    try {
        const { fullname, lastname, email, cellphone } = req.body;
        const query: string = `INSERT INTO users (fullname, lastname,email,cellphone) VALUES ('${fullname}','${lastname}','${email}','${cellphone}')`;
        const response: QueryResult = await pool.query(query);
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query('SELECT * FROM users');
        return res.json(response.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

export const getUserById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const response: QueryResult = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        return res.json(response.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};
