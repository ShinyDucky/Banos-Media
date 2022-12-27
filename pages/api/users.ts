// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { json } from 'stream/consumers';
import { pool } from '@db/users';
import "pg";

type Data = {
//   name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const method = req.method;

    if (method === "GET") {
        const users = await pool;
        
    }
}
