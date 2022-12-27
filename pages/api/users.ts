// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { json } from 'stream/consumers';
import { pool } from '@db/users';
import { Pool } from "pg";

type Data = {
    //username: string,
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const method = req.method;

    if (method === "GET") {
        const users = await (await pool.query("SELECT * FROM users")).rows;

        res.status(200).send(users);
    } else if (method === "POST") {
        const { username, email, password } = req.body;

        const result = await pool.query(`INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`, [username, email, password])
        res.status(200).send(result);
    }
}
