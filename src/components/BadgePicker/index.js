import React, { useMemo } from "react";
import { DropTarget } from "react-drag-drop-container";

import Badge from "../Badge";

import { Container } from "./styles";

export default function BadgePicker({ data, goals, setGoals }) {
  const availableBadges = useMemo(() => {
    return data.filter(goal => !goal.active);
  }, [data]);

  return (
    <Container>
      <DropTarget
        onHit={() => {
          console.log("drop");
        }}
      >
        {availableBadges.map(goal => (
          <Badge
            key={goal.id}
            data={goal}
            goals={goals}
            setGoals={setGoals}
            active={!goal.active}
          />
        ))}
      </DropTarget>
    </Container>
  );
}
