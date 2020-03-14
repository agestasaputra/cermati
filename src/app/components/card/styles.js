import styled from "styled-components";
import color from "config/guidlines/color";

export const Container = {
  Wrapper: styled.div`
    text-decoration: none;
    /* background: lavender; */
    border: 1px solid ${color.brand.primaryGray};
    width: 100%;
    height: fit-content;
    padding: 30px 20px;
  `,
  Top: styled.div`
    display: flex;
    flex-flow: row nowrap;
    margin-bottom: 15px;
  `,
  Bottom: styled.div``
};

export const Title = styled.div`
  flex: 1;
`;

export const Icon = styled.div`
  text-align: right;

  i {
    color: ${color.brand.primaryDarkGray};
    font-size: 20px;
  }
`;

export const Desc = styled.div`
  text-align: left;
`;
