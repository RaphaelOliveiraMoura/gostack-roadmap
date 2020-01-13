import React from "react";

import { Container } from "./styles";

import rocketseat from "../../assets/rocketseat.svg";
import gostack from "../../assets/gostack.svg";

export default function Header() {
  return (
    <Container>
      <img src={rocketseat} alt="Rocketseat" />
      <img src={gostack} alt="Gostack" />
    </Container>
  );
}
