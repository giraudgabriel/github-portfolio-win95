import { STYLES } from "@/pages/home/styles";
import windowService from "@/services/window.service";
import { Button, Toolbar } from "react95";

export const Footer = ({ windows }: { windows: WindowReducer.Data[] }) => {
  return (
    <Toolbar style={STYLES.TOOLBAR}>
      <Button variant="menu" size="lg">
        <span style={{ fontWeight: "bold" }}>Start</span>
      </Button>
      {windows.map((window) => (
        <Button
          variant="menu"
          size="lg"
          key={window.id}
          active={!window?.minimized}
          onClick={() => {
            windowService.minimize(window);
          }}
        >
          {window.icon} {window.title}{" "}
        </Button>
      ))}
    </Toolbar>
  );
};
