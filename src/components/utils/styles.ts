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

export const Row = styled.div<IPropsFlex>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.gap || "1rem"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "flex-start"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
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
font-size: ${(props) => props.size || "0.875rem"};
  font-weight: 400;
  margin-bottom: 1rem;
`;

export const Link = styled.a<IFontSize>`
cursor:pointer;
font-size: ${(props) => props.size || "0.875rem"};
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



function getRGB(c: any) {
  return parseInt(c, 16) || c
}

function getsRGB(c: any) {
  return getRGB(c) / 255 <= 0.03928
    ? getRGB(c) / 255 / 12.92
    : Math.pow((getRGB(c) / 255 + 0.055) / 1.055, 2.4)
}

function getLuminance(hexColor: any) {
  return (
    0.2126 * getsRGB(hexColor.substr(1, 2)) +
    0.7152 * getsRGB(hexColor.substr(3, 2)) +
    0.0722 * getsRGB(hexColor.substr(-2))
  )
}

function getContrast(f: any, b: any) {
  const L1 = getLuminance(f)
  const L2 = getLuminance(b)
  return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05)
}

export function getTextColor(bgColor: any) {
  const whiteContrast = getContrast(bgColor, '#ffffff')
  const blackContrast = getContrast(bgColor, '#000000')

  return whiteContrast > blackContrast ? '#ffffff' : '#000000'
}