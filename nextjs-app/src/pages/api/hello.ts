import type { NextApiRequest, NextApiResponse } from "next"
import { getDummyItems1 } from "package-1-with-prisma"
import { getDummyItems2 } from "package-2-with-prisma"

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await getDummyItems1()
  await getDummyItems2()

  res.status(200).json({ name: "John Doe" })
}
