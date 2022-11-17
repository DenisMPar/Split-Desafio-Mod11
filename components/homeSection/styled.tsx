import styled from "styled-components";

export const Root = styled.main`
  height: 100vh;
  padding: 0 14px;
  background-color: #f6f9ff;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3fr 2fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 46px;
`;
export const ContainerImgMovil = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const ContainerImgDesktop = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
