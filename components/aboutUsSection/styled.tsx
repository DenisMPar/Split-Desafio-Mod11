import styled from "styled-components";

export const Root = styled.section`
  height: 100vh;
  padding: 0 14px;
  background-color: #dbe5f2;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3fr 2fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;
export const TextContainer = styled.div`
  max-width: 607px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 46px;
  @media screen and (min-width: 1024px) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
  }
`;
export const ContainerImgMovil = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
export const ContainerImgDesktop = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;
