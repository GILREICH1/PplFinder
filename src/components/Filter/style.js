import styled from "styled-components";

export const Filters = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  align-items: center;
  flex-wrap: wrap;
  & > * {
    margin-inline-end: 8px;
  }
`;

export const ShowAllButton = styled.button`
  background: "white";
  color: "palevioletred";
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
