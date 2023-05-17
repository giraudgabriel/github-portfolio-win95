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
}
export const STYLES: IHeaderStyles = {
  MENU_ITEM: {
  },
  MENU: {
    position: "absolute",
    right: "0",
    top: "100%",
  },
  APP_BAR: {
    width: "100%",
    height: "4rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    minWidth: window.innerWidth,
    position: "fixed",
    top: "0",
    padding: "0 0.5rem",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "rgb(254, 254, 254) rgb(10, 10, 10) rgb(10, 10, 10) rgb(254, 254, 254)",
    boxShadow: "rgb(223, 223, 223) 1px 1px 0px 1px inset, rgb(132, 133, 132) - 1px - 1px 0px 1px inset",
    boxSizing: "border-box",
    background: "rgb(198, 198, 198)",
  },
  BUTTON: {
    width: "20rem",
    height: "3rem",
  }
};