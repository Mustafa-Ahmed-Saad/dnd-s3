import { useState } from "react";
import "./App.css";
import initialData from "./helper/initial-data";
import Column from "./components/Column/Column";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
  const [data, setData] = useState(initialData);

  // onDragEnd is required
  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    // if drop outside the droppable
    if (!destination) {
      return;
    }
    // if location of droppable is not changed
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = data.columns[source.droppableId];
    const newTaskIds = [...column.taskIds];
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newData = {
      ...data,
      columns: {
        ...data.columns,
        [column.id]: {
          ...column,
          taskIds: newTaskIds,
        },
      },
    };

    setData(newData);
    console.log(newData);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {data.columnsOrder.map((columnId) => {
        const column = data.columns[columnId];
        const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);
        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
}

export default App;
