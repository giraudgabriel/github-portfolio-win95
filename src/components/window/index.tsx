import windowService from "@/services/window.service";
import React from "react";
import { Button, Window, WindowContent, WindowHeader } from "react95";
import { STYLES, WindowIcon } from "./styles";

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
      onDrag={(e) => {
        if (e.clientY < 0) {
          minimize();
        }
      }}
    >
      <WindowHeader style={STYLES.HEADER}>
        <WindowIcon>
          {data?.icon} {data?.title}
        </WindowIcon>
        <div style={STYLES.DIV_HEADER}>
          <Button onClick={minimize} disabled={!data?.minimazable}>
            <span className="minimize-icon" />
          </Button>
          <Button onClick={close} disabled={!data?.closeable}>
            <span className="close-icon" />
          </Button>
        </div>
      </WindowHeader>
      <WindowContent
        style={{
          ...STYLES.WINDOW_CONTENT,
          ...data?.style,
        }}
      >
        <div>{children}</div>
      </WindowContent>
    </Window>
  );
};
