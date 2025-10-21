import { prisma } from "../config/db.js";

export const personService = {
  create: async (data) => prisma.person.create({ data }),
  findAll: async () => prisma.person.findMany(),
  findById: async (id) => prisma.person.findUnique({ where: { id: Number(id) } }),
  update: async (id, data) =>
    prisma.person.update({ where: { id: Number(id) }, data }),
  delete: async (id) => prisma.person.delete({ where: { id: Number(id) } }),
};
