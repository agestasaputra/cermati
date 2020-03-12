import styled from "styled-components";

export const Container = {
  Wrapper: styled.div`
    display: flex;
    flex-flow: row nowrap;
    padding: 20px 250px;
  `,
  Left: styled.div`
    flex: 1;
  `,
  Right: styled.div`
    flex: 0.1;
  `
};
