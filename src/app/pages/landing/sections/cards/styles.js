import styled from "styled-components";
import color from "config/guidlines/color";
import { XS_DEVICES_WIDTH, M_DEVICES_WIDTH } from "config/guidlines/display";

export const Container = styled.div`
  width: 100%;
  padding: 0px 20px 50px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 25px;
  /* background: ${color.brand.primaryGray}; */

  a {
    text-decoration: none;
  }

  @media(max-width: ${M_DEVICES_WIDTH}) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: ${XS_DEVICES_WIDTH}) {
    grid-template-columns: 1fr;
  }
`;
