import windowService from "@/services/window.service";
import React from "react";
import { Button, Window, WindowContent, WindowHeader } from "react95";

interface ICustomWindow {
  children?: React.ReactNode;
  data?: WindowReducer.Data;
}

const STYLES = {
  WINDOW: {
    overflow: "auto",
    maxHeight: "30rem",
    maxWidth: "45rem",
    height: "100%",
  },
  HEADER: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  DIV_HEADER: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginRight: "12px",
  },
};

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
    <Window style={STYLES.WINDOW}>
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
