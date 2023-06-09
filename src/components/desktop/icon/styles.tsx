import styled from "styled-components";

export const IconContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;

  &:hover {
    background-color: #c0c0c0;
  }

  &:active {
    border: 1px dotted black;
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }
`;

export const Icon = styled.div`
  font-size: 2rem;
`;

export const IconText = styled.div`
  font-size: 0.75rem;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 5rem;
`;
