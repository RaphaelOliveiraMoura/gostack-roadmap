import React from "react";
import { MdCheckCircle } from "react-icons/md";
import { DragDropContainer, DropTarget } from "react-drag-drop-container";

import { Container } from "./styles";

export default function Badge({ data, goals, setGoals, active }) {
  const DragAndDropComponent = active ? DragDropContainer : DropTarget;

  return (
    <Container active={active}>
      <DragAndDropComponent
        targetKey={data.id}
        onDrop={() => {
          const newState = goals.map(goal => {
            if (goal.id === data.id) {
              return {
                ...goal,
                active: true
              };
            }

            return goal;
          });

          setGoals(newState);
        }}
      >
        <div className="badge-container">
          <div>
            <label>{data.id}</label>
            {active && <MdCheckCircle size={24} color="#2d5a35" />}
          </div>

          <p>{data.description}</p>
        </div>
      </DragAndDropComponent>
    </Container>
  );
}
