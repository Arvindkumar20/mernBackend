import express from "express";
const router=express.Router();

import { handleCreateTasks,
    handleDeleteTask,
    handleGetTasks,
    handleUpdateTask,
 } from "../controllers/controllers.tasks.js";


router.route("/").post(handleCreateTasks)
.get(handleGetTasks)
router.route("/:id")
.patch(handleUpdateTask)
.delete(handleDeleteTask)


export  {
    router,
};
