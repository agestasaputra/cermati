import React from "react";
import { Container } from "./styles";
import { P2 } from "app/components/font";

const Cookies = () => {
  return (
    <Container.Wrapper>
      <Container.Left>
        <P2>
          By accessing and using this website, you acknowledge that you have
          read and understand our Cookie Policy, Privacy Policy, and our Terms
          of Service
        </P2>
      </Container.Left>
      <Container.Right></Container.Right>
    </Container.Wrapper>
  );
};

export default Cookies;
