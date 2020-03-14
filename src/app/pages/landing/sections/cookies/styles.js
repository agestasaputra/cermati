import styled from "styled-components";

export const Container = {
  Wrapper: styled.div`
    display: flex;
    flex-flow: row nowrap;
    padding: 10px 350px;
  `,
  Left: styled.div`
    flex: 1;
  `,
  Right: styled.div`
    flex: 0.15;
    display: flex;
    align-items: center;
  `
};
