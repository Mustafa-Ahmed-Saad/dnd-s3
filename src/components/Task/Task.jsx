import { Draggable } from "react-beautiful-dnd";
import { Container } from "./TaskStyled";

export default function Task({ task, index }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapShot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapShot.isDragging}
        >
          {task.content}
        </Container>
      )}
    </Draggable>
  );
}
