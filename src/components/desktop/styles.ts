import styled from "styled-components";

export const DesktopGrid = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`;