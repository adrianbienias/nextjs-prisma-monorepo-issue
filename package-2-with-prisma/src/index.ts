import prisma from "./prisma"

export async function getDummyItems2() {
  return await prisma.dummyTableTwo.findMany()
}
