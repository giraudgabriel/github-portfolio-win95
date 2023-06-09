import styled from "styled-components";

interface IStyles {
  WINDOW_CONTENT: React.CSSProperties;
  WINDOW: React.CSSProperties;
  HEADER: React.CSSProperties;
  DIV_HEADER: React.CSSProperties;
}

export const WindowIcon = styled.span`
display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    gap: 4px;
    img {
      width: 16px;
      height: 16px;
    }
`;

export const STYLES: IStyles = {
  WINDOW: {
    maxHeight: "30rem",
    maxWidth: "45rem",
    height: "fit-content",
    position: "relative",
    overflow: "auto",
  },
  HEADER: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  DIV_HEADER: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginRight: "12px",
  },
  WINDOW_CONTENT: {
    overflow: "auto",
    maxHeight: "30rem",
    maxWidth: "45rem",
  }
};