import styled from "styled-components";
import color from "config/guidlines/color";

export const Container = {
  Wrapper: styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 20px;
    background: ${color.brand.primaryBlue};
    opacity: 0.9;
    width: 550px;
  `,
  Header: styled.div`
    text-align: right;

    .fa-times {
      color: ${color.brand.primaryWhite};
      cursor: pointer;
    }
  `,
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
