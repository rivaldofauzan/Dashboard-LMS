import express from "express";
import { getAllCourses } from "../controllers/DasboardController";

const router = express.Router();

router.get("/users", getAllCourses);

export default router;
