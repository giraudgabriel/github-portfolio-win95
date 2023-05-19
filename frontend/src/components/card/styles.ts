import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  .center {
    justify-content: center;
    align-items: center;
  }
`;


export const MainNewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const NewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const ButtonText = styled.span`
  font-size: 0.875rem; 
  font-weight: 500;
  text-overflow: ellipsis;
  align-self: center;
  align-items: center;
  word-break: none;
`;