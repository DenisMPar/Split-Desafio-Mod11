import styled from "styled-components";

export const Root = styled.section`
  height: 100vh;
  background-color: #dbeaf2;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;
export const TextContainer = styled.div`
  max-width: 607px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 46px;
`;
export const Form = styled.form`
  height: 100%;
  width: 100%;
  justify-self: center;
  max-width: 327px;
  padding: 0 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 58px;
`;
