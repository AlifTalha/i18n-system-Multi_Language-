import express from "express";
import { personController } from "../controllers/personController.js";

const router = express.Router();

router.post("/", personController.createPerson);
router.get("/", personController.getAllPersons);
router.get("/:id", personController.getPersonById);
router.put("/:id", personController.updatePerson);
router.delete("/:id", personController.deletePerson);

export default router;
