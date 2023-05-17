import windowService from "@/services/window.service";
import React from "react";
import { Button, Window, WindowContent, WindowHeader } from "react95";
import { STYLES } from "./styles";

interface ICustomWindow {
  children?: React.ReactNode;
  data?: WindowReducer.Data;
}

export const CustomWindow = ({
  children,
  data,
}: ICustomWindow): JSX.Element => {
  const close = () => {
    if (!data?.closeable) return;
    windowService.close(data);
  };

  const minimize = () => {
    if (!data?.minimazable) return;
    windowService.minimize(data);
  };

  return (
    <Window
      style={{
        ...STYLES.WINDOW,
        opacity: data?.minimized ? 0 : 1,
        display: data?.minimized ? "none" : "block",
        ...data?.windowStyle,
      }}
    >
      <WindowHeader style={STYLES.HEADER}>
        <span>
          {data?.icon} {data?.title}
        </span>
        <div style={STYLES.DIV_HEADER}>
          <Button onClick={minimize} disabled={!data?.minimazable}>
            <span className="minimize-icon" />
          </Button>
          <Button onClick={close} disabled={!data?.closeable}>
            <span className="close-icon" />
          </Button>
        </div>
      </WindowHeader>
      <WindowContent style={data?.style}>
        <div>{children}</div>
      </WindowContent>
    </Window>
  );
};
