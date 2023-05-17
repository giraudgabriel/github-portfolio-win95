import terminalService from "@/services/terminal.service";
import { useEffect, useState } from "react";
import {
  TerminalBody,
  TerminalBodyContent,
  ContentLine,
  InputBody,
  Input,
  TerminalContainer,
} from "./styles";

const Commands = ["help", "clear", "font", "dev", "background"];

type Command = (typeof Commands)[number];

export const Terminal = () => {
  const [history, setHistory] = useState<string[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  const execute = async (command: Command) => {
    setText("");
    setIndex((index) => index + 1);
    setCommandHistory((prev) => [...prev, command]);
    
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
      case "background":
        result = terminalService.background(args[0]);
        break;
      case "clear":
        setHistory([]);
        setIndex(0);
        setCommandHistory([]);
        return;
      default:
        result = "Command not found - type 'help' to see available commands";
        break;
    }
    setHistory((prev) => [...prev, result]);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onKeyPress = async (e: KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      const goTo = index - 1 < 0 ? 0 : index - 1;
      setIndex(goTo);
      setText(commandHistory[goTo] || "");
    } else if (e.key === "ArrowDown") {
      const goTo =
        index + 1 > commandHistory.length ? commandHistory.length : index + 1;
      setIndex(goTo);
      setText(commandHistory[goTo] || "");
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyPress);
    return () => {
      document.removeEventListener("keydown", onKeyPress);
    };
  }, [onKeyPress]);

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
