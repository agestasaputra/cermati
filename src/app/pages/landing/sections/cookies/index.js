import React from "react";
import { Container } from "./styles";
import { P3 } from "app/components/font";
import Button from "app/components/button";

const Cookies = ({ setCookies }) => {
  return (
    <Container.Wrapper>
      <Container.Left>
        <P3>
          By accessing and using this website, you acknowledge that you have
          read and understand our Cookie Policy, Privacy Policy, and our Terms
          of Service
        </P3>
      </Container.Left>
      <Container.Right>
        <Button width="100%" onClick={() => setCookies(false)}>
          Got it!
        </Button>
      </Container.Right>
    </Container.Wrapper>
  );
};

export default Cookies;
