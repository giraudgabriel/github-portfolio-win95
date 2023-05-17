import { createGlobalStyle } from "styled-components";

import { styleReset } from "react95";
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import { getTextColor } from "@/components/utils/styles";

type Theme = {
  font: string;
  background: string;
};

export const GlobalStyles = createGlobalStyle<Theme>`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: ${({ font }) => {
      return font;
    }};
    background: ${({ background }) => {
      return background;
    }}
  }

  .close-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: -1px;
    margin-top: -1px;
    transform: rotateZ(45deg);
        position: relative;
    &:before,
    &:after {
      content: '';
      position: absolute;
      background: black;
    }
        &:before {
     height: 100%;
     width: 3px;
     left: 50%;
     transform: translateX(-50%);
   }
   &:after {
     height: 3px;
     width: 100%;
     left: 0px;
     top: 50%;
     transform: translateY(-50%);
   }
  }

  .minimize-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: -1px;
    margin-top: -1px;
    transform: rotateZ(0deg);
    position: relative;
    &:after {
      content: '';
      position: absolute;
      background: black;
     height: 3px;
     width: 100%;
     left: 0px;
     top: 50%;
     transform: translateY(-50%);
   }
  }

  .terminal {
    width: 100%;
    height: 100%;
    background-color: #000;
    color: #fff;
    font-family: monospace;
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
  }

  .terminal__header {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background-color: #333;
    border-bottom: 1px solid #000;
  }

  .terminal__header__buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 3rem;
    height: 1rem;
  }

  .terminal__header__button {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
  }

  .terminal__header__button--red {
    background-color: #ff5f57;
  }

  .terminal__header__button--yellow {
    background-color: #ffbd2e;
  }

  .terminal__header__button--green {
    background-color: #28ca41;
  }

  .terminal__header__title {
    margin-left: 1rem;
  }

  .terminal__body {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    background-color: #000;
  }

  .terminal__body__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }

  .terminal__body__content__line {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .terminal__body__content__line__text {
    margin-left: 0.5rem;
  }

  .terminal__body__input {
    display: flex;
    align-items: center;
  }

  .terminal__body__input__text {
    margin-right: 0.5rem;
  }

  .terminal__body__input__input {
    background-color: transparent;
    border: none;
    outline: none;
    color: #fff;
    font-family: monospace;
    font-size: 1.2rem;
    width: 100%;
    max-width: 100%;
  }

  .terminal__body__input__input::placeholder {
    color: #fff;
  }

  .terminal__body__input__input:focus {
    outline: none;
  }

  .terminal__body__input__input::-ms-clear {
    display: none;
  }

  .terminal__body__input__input::-webkit-search-cancel-button {
    display: none;
  }

  .terminal__body__input__input::-webkit-input-placeholder {
    color: #fff;
  }

  .text-color {
    color: ${({ background }) => getTextColor(background)};
  }
`;
