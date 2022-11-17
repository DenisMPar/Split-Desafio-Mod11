import styled from "styled-components";

export const Root = styled.section`
  height: 740px;
  background-color: #dbeaf2;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 2fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;
export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const Form = styled.form`
  height: 100%;
  padding: 0 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 58px;
`;
