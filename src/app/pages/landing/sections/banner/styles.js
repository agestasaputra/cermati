import styled from "styled-components";
import color from "config/guidlines/color";
import BannerImg from "app/assets/banner.jpg";
import { XS_DEVICES_WIDTH, M_DEVICES_WIDTH } from "config/guidlines/display";

export const Container = styled.div`
  width: 100%;
  height: 550px;
  background: url(${BannerImg});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: sepia(90%) hue-rotate(170deg) saturate(500%) grayscale(20%);

  @media (max-width: ${XS_DEVICES_WIDTH}) {
    height: 200px;
  }

  .logo {
    position: absolute;
    left: 0;
    top: 0;
    margin: 2%;
    width: auto;
    height: 10%;

    @media (max-width: ${XS_DEVICES_WIDTH}) {
      height: 13%;
    }
  }
`;

export const Text = styled.div`
  text-align: center;

  .title-1 {
    color: ${color.brand.primaryWhite} !important;
    font-weight: 500;
  }

  .title-2 {
    margin: 10px 0px;
    color: ${color.brand.primaryWhite} !important;

    @media (max-width: ${M_DEVICES_WIDTH}) {
      margin: 15px 0px;
    }

    @media (max-width: ${XS_DEVICES_WIDTH}) {
      margin: 10px 0px;
    }
  }

  .subtitle-1 {
    color: ${color.brand.primaryWhite} !important;
    font-weight: 500;
  }

  .subtitle-2 {
    color: ${color.brand.primaryWhite} !important;
    font-weight: unset;
  }

  .btn {
    margin: 5px auto;
  }
`;

// export const Container = styled.div`
//   width: 100%;
//   height: 550px;

//   img {
//     width: 100%;
//     height: 100%;
//     filter: sepia(80%) hue-rotate(190deg) saturate(500%);
//   }
// `;

// export const Text = styled.div`
//   position: absolute;
//   top: 310px;
//   left: 50%;
//   margin-right: -50%;
//   transform: translate(-50%, -50%);
//   color: ${color.brand.primaryWhite} !important;

//   .title-1 {
//     color: ${color.brand.primaryWhite} !important;
//   }
//   .title-2 {
//     color: ${color.brand.primaryWhite} !important;
//   }
//   .subtitle-1 {
//     color: ${color.brand.primaryWhite} !important;
//   }
//   .subtitle-2 {
//     color: ${color.brand.primaryWhite} !important;
//   }
// `;
