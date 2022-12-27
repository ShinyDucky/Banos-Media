// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { json } from 'stream/consumers';

  type Data = {
//   name: string
  }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const method = req.method;

  if (method === "GET") {
    res.send({"hello":"world"})
  } else {
    res.send("SEND A GET REQUEST")
  }

}
