const express = require("express");
const Task = require("../model/taskModel")
const router = express.Router();
const { createTask, getAllTask, getSingleTask, deleteTask, updateTask } = require("../controllers/taskController")


//to club the route with same endpoint in one line
// router.route("/").get(getAllTask).post(createTask)
//router.route("/:id").get(getSingleTask).delete(deleteTask).patch(updateTask)


//create a task
router.post("/", createTask)
//get read data
router.get("/", getAllTask)
router.get("/:id", getSingleTask);
router.delete("/:id", deleteTask);
router.patch("/:id", updateTask);


module.exports = router