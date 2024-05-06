import { Router } from "express";
import tutorController from "../controller/tutorController";
const router = Router();

router.get("/clients", tutorController.findAll);

export default router;
