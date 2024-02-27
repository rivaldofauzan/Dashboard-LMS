import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllCourses = async (req, res) => {
  try {
    const users = await prisma.User.findMany();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
