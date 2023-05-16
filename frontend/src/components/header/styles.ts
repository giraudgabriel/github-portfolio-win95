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
  MENU: React.CSSProperties;
  APP_BAR: React.CSSProperties;
  BUTTON: React.CSSProperties;
  TOOLBAR: React.CSSProperties;
}
export const STYLES: IHeaderStyles = {
  MENU: {
    position: "absolute",
    left: "0",
    top: "100%",
    zIndex: 9999999999999,
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
    justifyContent: "space-between",
    width: "100%",
    minWidth: window.innerWidth,
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: 9999999999999,
  }
};