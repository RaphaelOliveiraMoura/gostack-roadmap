import React, { useState } from "react";

import Header from "../Header";
import Badge from "../Badge";
import BadgePicker from "../BadgePicker";

import { Container, RoadMap } from "./styles";

import initialStateGoals from "../../goals";

export default function Map() {
  const [goals, setGoals] = useState(initialStateGoals);

  return (
    <>
      <Header />
      <Container>
        <RoadMap>
          {goals.map(goal => (
            <Badge
              key={goal.id}
              data={goal}
              goals={goals}
              setGoals={setGoals}
              active={goal.active}
            />
          ))}
        </RoadMap>
        <BadgePicker data={goals} goals={goals} setGoals={setGoals} />
      </Container>
    </>
  );
}
