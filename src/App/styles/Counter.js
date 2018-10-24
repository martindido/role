import styled from "styled-components";

export const Count = styled.div`
  font-family: sans-serif;
  font-size: 192px;
  color: #61dafb;
  text-align: center;
`;

export const Actions = styled.div`
  text-align: center;
`;

export const Button = styled.button`
  display: inline-block;
  background: #61dafb;
  color: #fff;
  border-radius: 2px;
  border: 0;
  font-size: 16px;
  padding: 8px;
  margin: 2px;
  min-width: 32px;
  outline: 0;
  cursor: pointer;
  &:hover {
    background: #60c0f7;
  }
  &:active {
    background: #4d98c4;
  }
`;
