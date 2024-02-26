const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");

const port = 3000;

// middleware
app.use(express.json());

// seever
app.get("/hello", (req, res) => {
  res.send("Task manager app");
});

app.use("/api/v1/tasks", tasks);

// app.get("/api/v1/tasks")  // get all the tasks
// app.post("/api/v1/tasks")  // create a new task
// app.get("/api/v1/tasks/:id") // get a single task
// app.patch("/api/v1/tasks/:id") // edit a task
// app.delete("/api/v1/tasks/:id")  // delete a task

const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
