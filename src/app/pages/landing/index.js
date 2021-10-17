import React from "react";
import { Container } from "./styles";
import Cookies from "./sections/cookies";
import Banner from "./sections/banner";
import Description from "./sections/description";
import Cards from "./sections/cards";
import Updates from "./sections/updates";

const Landing = ({ state }) => {
  // const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', e => onScrolled(e));
  }, []);

  const onScrolled = () => {
    if (window.scrollY > 100) {
      const updatesElement = document.querySelector('.updates');
      updatesElement.classList.add('show');
    }
  }

  const onCookiesClicked = () => {
    const cookiesElement = document.querySelector('.cookies');
    cookiesElement.classList.add('hidden');
  }

  const onUpdatesClicked = () => {
    const updatesElement = document.querySelector('.updates');
    updatesElement.classList.add('hidden');
  }

  return (
    <Container>
      <Cookies onCookiesClicked={onCookiesClicked} />
      <Banner />
      <Description />
      <Cards state={state} />
      <Updates onUpdatesClicked={onUpdatesClicked} />
    </Container>
  );
};

export default Landing;
