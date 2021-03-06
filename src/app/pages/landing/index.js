import React from "react";
import { Container } from "./styles";
import Cookies from "./sections/cookies";
import Banner from "./sections/banner";
import Description from "./sections/description";
import Cards from "./sections/cards";
import Updates from "./sections/updates";

const Landing = ({ state }) => {
  console.log("cek state:", state);
  const [cookies, setCookies] = React.useState(true);
  const [updates, setUpdates] = React.useState(true);
  return (
    <Container>
      {cookies && <Cookies setCookies={setCookies} />}
      <Banner />
      <Description />
      <Cards state={state} />
      {updates && <Updates setUpdates={setUpdates} />}
    </Container>
  );
};

export default Landing;
