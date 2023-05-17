import { CustomWindow } from "@/components/window";
import { COMPONENT_BY_ID, WINDOWS } from "@/data/windows";
import { useAppSelector } from "@/hooks/useAppSelector";
import React, { useMemo } from "react";

import { WindowContent } from "react95";
import { STYLES } from "./styles";
import { Footer } from "@/components/footer";
import { Desktop } from "@/components/desktop";

export const Home: React.FC = (): JSX.Element => {
  const [count, setCount] = React.useState(0);
  const { windows, backgroundColor } = useAppSelector((state) => state.windows);

  const renderContent = (window: WindowReducer.Data) => {
    const Component = COMPONENT_BY_ID[window.id];
    return <Component {...window.props} />;
  };

  const openedWindows = useMemo(() => {
    return windows.map((window) => {
      return (
        <CustomWindow key={window.id} data={window}>
          {renderContent(window)}
        </CustomWindow>
      );
    });
  }, [windows]);

  const onDoubleClick = () => {
    if (count > 5) {
      const result = confirm("You found the secret! Congratulations!");
      if (result) alert("You are awesome!");
    }
    setCount((count) => count + 1);
    setTimeout(() => {
      setCount((count) => count - 1);
    }, 5000);
  };
  return (
    <main style={STYLES.APP_BAR} onDoubleClick={onDoubleClick}>
      <WindowContent
        style={{
          ...STYLES.WINDOW_CONTENT,
          background: backgroundColor,
        }}
      >
        <Desktop windows={WINDOWS} />
        {openedWindows}
      </WindowContent>
      <Footer windows={windows} />
    </main>
  );
};
