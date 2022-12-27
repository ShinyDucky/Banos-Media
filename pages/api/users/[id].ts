// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { pool } from '@db/users';
import type { NextApiRequest, NextApiResponse } from 'next'
import { json } from 'stream/consumers';

type Data = {
//   name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const method = req.method;
    const { id } = req.query;

    if (method === "GET") {
        const user = await (await pool.query("SELECT * FROM users WHERE id = $1", [id])).rows;
        
        if (user.length === 0) {
            res.status(404).send({
                "error": "user not found"
            })
        }

        res.status(200).send(user);
    } else if (method === "DELETE") {
        const response = await (await pool.query("DELETE FROM users WHERE id = $1", [id])).rows;

        res.status(200).send(response);
    }
}
