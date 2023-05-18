const Task = require("../model/taskModel");

//create task
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(200).json(task);
    }
    catch (error) {
        res.status(500).json({ msg: error.message });
    }
}


//get all task
const getAllTask = async (req, res) => {
    try {
        const task = await Task.find();   //find gives all the data if nothing specified
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
}

//Get a single task
const getSingleTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findById(id);

        if (!task) {
            return res.status(404).json(`No task with id: ${id}`)
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }

}


//delete the task
const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndDelete(id)
        if (!task) {
            return res.status(404).json(`No task with id: ${id}`)
        }
        res.status(200).send("deleted successfully")
    }
    catch (error) {
        res.status(500).send("internal server error");
    }
}


// Updata a task
const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndUpdate(
            { _id: id }, req.body, { new: true, runValidators: true }
        )
        if (!task) {
            return res.status(404).json(`No task with id: ${id}`)
        }
        res.status(200).json(task)
    }
    catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

module.exports = {
    createTask,
    getAllTask,
    getSingleTask,
    deleteTask,
    updateTask
}