const initialData = {
  tasks: {
    "task-1": {
      id: "task-1",
      content: "task-1",
    },
    "task-2": {
      id: "task-2",
      content: "task-2",
    },
    "task-3": {
      id: "task-3",
      content: "task-3",
    },
    "task-4": {
      id: "task-4",
      content: "task-4",
    },
  },

  columns: {
    "column-1": {
      id: "column-1",
      title: "My App",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
  },

  columnsOrder: ["column-1"],
};

export default initialData;
