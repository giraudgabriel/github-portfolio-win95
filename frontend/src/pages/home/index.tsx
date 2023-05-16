import { Header } from "@/components/header";
import { CustomWindow } from "@/components/window";
import { COMPONENT_BY_ID } from "@/data/windows";
import { useAppSelector } from "@/hooks/useAppSelector";
import windowService from "@/services/window.service";
import React, { useMemo } from "react";

import { AppBar, Window, WindowContent, WindowHeader } from "react95";
import { STYLES } from "./styles";
import { Footer } from "@/components/footer";

export const Home: React.FC = (): JSX.Element => {
  const { windows } = useAppSelector((state) => state.windows);

  const renderContent = (window: WindowReducer.Data) => {
    const Component = COMPONENT_BY_ID[window.id];
    return <Component />;
  };

  const content = useMemo(() => {
    const toRender = windows.filter((x) => !x?.minimized);
    return toRender.map((window) => {
      return (
        <CustomWindow key={window.id} data={window}>
          {renderContent(window)}
        </CustomWindow>
      );
    });
  }, [windows]);

  return (
    <AppBar style={STYLES.APP_BAR}>
      <Window shadow={true} style={STYLES.WINDOW}>
        <WindowHeader>
          <Header />
        </WindowHeader>
        <WindowContent style={STYLES.WINDOW_CONTENT}>{content}</WindowContent>
      </Window>
      <Footer windows={windows} />
    </AppBar>
  );
};
