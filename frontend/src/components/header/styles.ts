import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  height: 4rem;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

interface IHeaderStyles {
  MENU_ITEM: React.CSSProperties;
  MENU: React.CSSProperties;
  APP_BAR: React.CSSProperties;
  BUTTON: React.CSSProperties;
  TOOLBAR: React.CSSProperties;
}
export const STYLES: IHeaderStyles = {
  MENU_ITEM: {
  },
  MENU: {
    position: "absolute",
    left: "0",
    top: "100%",
  },
  APP_BAR: {
    width: "100%",
    height: "4rem",
  },
  BUTTON: {
    width: "15rem",
    height: "3rem",
  },
  TOOLBAR: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    minWidth: window.innerWidth,
    position: "fixed",
    top: "0",
    right: "0.5rem",
  }
};