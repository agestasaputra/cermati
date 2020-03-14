import React from "react";
import { Container } from "./styles";
import { P3 } from "app/components/font";
import Button from "app/components/button";
import { NavLink } from "react-router-dom";

const Cookies = ({ setCookies }) => {
  return (
    <Container.Wrapper>
      <Container.Left>
        <P3>
          By accessing and using this website, you acknowledge that you have
          read and understand our <NavLink to="cookie">Cookie Policy</NavLink>
          ,&nbsp;
          <NavLink to="privacy">Privacy Policy</NavLink>, and our&nbsp;
          <NavLink to="terms">Terms of Service</NavLink>
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
