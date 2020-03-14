import styled from "styled-components";
import color from "config/guidlines/color";

export const Container = {
  Wrapper: styled.div`
    padding: 20px;
    background: ${color.brand.primaryBlue};
    opacity: 0.8;
    width: 550px;
  `,
  Header: styled.div``,
  Content: styled.div`
    .title {
      color: ${color.brand.primaryWhite};
    }
    .text {
      color: ${color.brand.primaryWhite};
    }
  `,
  Footer: styled.div`
    display: flex;
    flex-flow: row nowrap;
    margin-top: 10px;

    .input-email {
      flex: 1;
      margin-right: 5px;
    }
  `
};
