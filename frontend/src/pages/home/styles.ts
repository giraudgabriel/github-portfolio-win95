import { position } from "html2canvas/dist/types/css/property-descriptors/position";
import styled from "styled-components";

interface IPropsFlex {
  justify?: string;
  align?: string;
  gap?: string;
  wrap?: string;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
}

interface IFontSize {
  size?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  .center {
    justify-content: center;
    align-items: center;
  }
`;


export const Row = styled.div<IPropsFlex>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.gap || "1rem"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "flex-start"};
  flex-wrap: ${(props) => props.wrap || "wrap"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
`;

export const Column = styled.div<IPropsFlex>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap || "1rem"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "flex-start"};
  flex-wrap: ${(props) => props.wrap || "wrap"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
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

export const Title = styled.h1<IFontSize>`
  font-size: ${(props) => props.size || "1.5rem"};
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.h2<IFontSize>`
font-size: ${(props) => props.size || "1.25rem"};
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const Text = styled.p<IFontSize>`
font-size: ${(props) => props.size || "1rem"};
  font-weight: 400;
  margin-bottom: 1rem;
`;

export const Link = styled.a<IFontSize>`
font-size: ${(props) => props.size || "1rem"};
  font-weight: 400;
  margin-bottom: 1rem;
  color: #0070f3;
  text-decoration: none;
  transition: color 0.2s ease;
  `;

export const TitleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  `;

export const MenuItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  font-size: 0.875rem;


  &:hover {
    cursor: pointer;
  }
`;

interface IStyles {
  WINDOW: React.CSSProperties;
  WINDOW_CONTENT: React.CSSProperties;
  APP_BAR: React.CSSProperties;
  TOOLBAR: React.CSSProperties;
  MENU: React.CSSProperties;
}

export const STYLES: IStyles = {
  APP_BAR: {
    position: "fixed",
    left: 0,
    right: 0,
    overflow: "auto",
    width: "100%",
    height: "100%",
  },
  WINDOW: {
    height: "100%",
    width: "100%",
  },
  WINDOW_CONTENT: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    zIndex: -1,
    position: "relative",
    width: "100%",
    height: "100%",
    padding: "0 16px"
  },
  TOOLBAR: {
    position: "fixed",
    bottom: 0,
    overflow: "auto",
    backgroundColor: "gainsboro",
    width: "100%",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "rgb(254, 254, 254) rgb(10, 10, 10) rgb(10, 10, 10) rgb(254, 254, 254)",
    boxShadow: "rgb(223, 223, 223) 1px 1px 0px 1px inset, rgb(132, 133, 132) - 1px - 1px 0px 1px inset",
    boxSizing: "border-box",
    background: "rgb(198, 198, 198)",
  },
  MENU: {
    position: "fixed",
    left: "0",
    bottom: "3.5rem",
  },
};
