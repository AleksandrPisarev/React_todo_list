import React from "react";

export default function Task({ changeStatus, deleteTask, task, index }) {
  return (
    <div className="container-task">
      <div
        className={task.status ? "task active" : "task inactive"}
        onClick={changeStatus}>
        <div>{index}</div>
        <div className="task-description">{task.description}</div>
        <div>{task.time}</div>
      </div>
      <button onClick={deleteTask}>Удалить</button>
    </div>
  );
}
