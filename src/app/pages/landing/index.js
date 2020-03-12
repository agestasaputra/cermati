import React from "react";
import { Container } from "./styles";
import Cookies from "./sections/cookies";
// import Banner from "./sections/banner";

const Landing = ({ state, dispatch, location }) => {
  console.log("cek state:", state);
  console.log("cek dispatch:", dispatch);
  console.log("cek location:", location);
  return (
    <Container>
      <Cookies />
      {/* <Banner
        img={
          state.dataLandingPage.dataBanner && state.dataLandingPage.dataBanner
        }
      /> */}
    </Container>
  );
};

export default Landing;
