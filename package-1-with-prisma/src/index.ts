import prisma from "./prisma"

export async function getDummyItems1() {
  return await prisma.dummyTableOne.findMany()
}
