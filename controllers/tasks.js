const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
    // response types
    // res.status(200).json({ tasks, Total: tasks.length });
    // res
    //   .status(200)
    //   .json({ status: "success", data: { tasks, Total: tasks.length } }); // setting up a flag
  } catch (error) {
    res.status(500).json({  msg:{error} });
    // res.status(500).json({ status: "failed", msg:{error} });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getSingleTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });

    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });

    if (!task) {
      return res.status(404).json({ msg: `No task with id :  ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ msg: `No task with id :  ${taskID}` });
    }
    res.status(200).json({ id: taskID, data: req.body });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// this os for finding the difference between PUT and PATCH
// const editTask = async (req, res) => {
//   try {
//     const { id: taskID } = req.params;
//     const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
//       new: true,
//       runValidators: true,
//       overwrite: true,
//     });
//     if (!task) {
//       return res.status(404).json({ msg: `No task with id :  ${taskID}` });
//     }
//     res.status(200).json({ id: taskID, data: req.body });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
  // editTask,
};
