import styled from "styled-components";
import {
  M_DEVICES_WIDTH,
  S_DEVICES_WIDTH,
  XS_DEVICES_WIDTH
} from "config/guidlines/display";

export const Container = {
  Wrapper: styled.div`
    display: flex;
    flex-flow: row nowrap;
    padding: 10px 350px;

    @media (max-width: ${M_DEVICES_WIDTH}) {
      padding: 10px 200px;
    }

    @media (max-width: ${S_DEVICES_WIDTH}) {
      padding: 10px 150px;
    }

    @media (max-width: ${XS_DEVICES_WIDTH}) {
      padding: 10px 10px;
    }
  `,
  Left: styled.div`
    flex: 1;
    margin-right: 5px;
  `,
  Right: styled.div`
    display: flex;
    align-items: center;
  `
};
