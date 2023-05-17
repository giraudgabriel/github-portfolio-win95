import { Header } from "@/components/header";
import { CustomWindow } from "@/components/window";
import { COMPONENT_BY_ID, WINDOWS } from "@/data/windows";
import { useAppSelector } from "@/hooks/useAppSelector";
import React, { useMemo } from "react";

import { WindowContent } from "react95";
import { STYLES } from "./styles";
import { Footer } from "@/components/footer";
import { Desktop } from "@/components/desktop";

export const Home: React.FC = (): JSX.Element => {
  const { windows } = useAppSelector((state) => state.windows);

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

  return (
    <main style={STYLES.APP_BAR}>
      <Header />

      <WindowContent style={STYLES.WINDOW_CONTENT}>
        <Desktop windows={WINDOWS} />
        {openedWindows}
      </WindowContent>
      <Footer windows={windows} />
    </main>
  );
};
