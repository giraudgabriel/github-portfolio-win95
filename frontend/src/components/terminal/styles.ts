import styled from "styled-components";

export const TerminalContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  color: #fff;
  font-family: monospace;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
`;

export const TerminalBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  background-color: #000;
`;

export const TerminalBodyContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const ContentLine = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const LineText = styled.div`
  margin-left: 0.5rem;
`;

export const InputBody = styled.div`
  display: flex;
  align-items: center;
`;

export const InputContainer = styled.div`
  margin-right: 0.5rem;
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-family: monospace;
  font-size: 1.2rem;
  width: 100%;
  max-width: 100%;
  &:focus {
    outline: none;
  }
  &::-ms-clear {
    display: none;
  }
  &::-webkit-search-cancel-button {
    display: none;
  }
  &::-webkit-input-placeholder {
    color: #fff;
  }

  &::-moz-placeholder {
    color: #fff;
  }

  &::placeholder {
    color: #fff;
  }
`;
