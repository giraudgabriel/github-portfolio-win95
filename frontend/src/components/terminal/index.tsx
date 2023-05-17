import terminalService from "@/services/terminal.service";
import { useState } from "react";
import {
  TerminalBody,
  TerminalBodyContent,
  ContentLine,
  InputBody,
  Input,
  TerminalContainer,
} from "./styles";

const Commands = ["help", "clear", "font", "dev"];

type Command = (typeof Commands)[number];

export const Terminal = () => {
  const [history, setHistory] = useState<string[]>([]);
  const [text, setText] = useState("");

  const execute = async (command: Command) => {
    setText("");
    const [cmd, ...args] = command.trim().split(" ");
    let result = "";
    switch (cmd) {
      case "font":
        result = terminalService.font(args[0]);
        break;
      case "help":
        result = `Available commands:\n ${Commands.join(", ")}`;
        break;
      case "dev":
        result = await terminalService.dev(args[0]);
        break;
      case "clear":
        setHistory([]);
        return;
      default:
        result = "Command not found - type 'help' to see available commands";
        break;
    }
    setHistory((prev) => [...prev, result]);
  };

  return (
    <TerminalContainer>
      <TerminalBody>
        <TerminalBodyContent>
          <ContentLine>
            <span className="terminal__body__content__line__text">
              Welcome to the terminal
            </span>
          </ContentLine>
          <ContentLine>
            <span className="terminal__body__content__line__text">
              Type 'help' to see available commands
            </span>
          </ContentLine>
          {history.map((item, index) => (
            <div className="terminal__body__content__line" key={index}>
              {item}
            </div>
          ))}
        </TerminalBodyContent>
        <InputBody>
          <span className="terminal__body__input__text"></span>
          <Input
            onChange={(e) => setText(e.target.value)}
            value={text}
            onKeyDown={async (e) => {
              if (e.key === "Enter") {
                await execute(text);
              }
            }}
          />
        </InputBody>
      </TerminalBody>
    </TerminalContainer>
  );
};
