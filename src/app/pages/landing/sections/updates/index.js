import React from "react";
import { Container } from "./styles";
import { H3, P3 } from "app/components/font";
import Button from "app/components/button";

const Updates = ({ setUpdates }) => {
  return (
    <Container.Wrapper>
      <Container.Header>
        <i className="fa fa-times" onClick={() => setUpdates(false)} />
      </Container.Header>
      <Container.Content>
        <H3 className="title">Get latest updates in web technologies</H3>
        <P3 className="text">
          I write articles related to web technologies, such as design trends,
          development tools, UI/UX case studies and reviews, and more. Sign up
          to my newsletter to get them all.
        </P3>
      </Container.Content>
      <Container.Footer>
        <input
          className="input-email"
          type="text"
          placeholder="Email address"
        />
        <Button className="btn-updates" onClick={() => setUpdates(false)}>
          Count me in!
        </Button>
      </Container.Footer>
    </Container.Wrapper>
  );
};

export default Updates;
