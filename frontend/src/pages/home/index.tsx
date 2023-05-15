import { Card } from "@/components/card";
import { Header } from "@/components/header";
import { useGithubUser } from "@/hooks/useGithubUser";
import React from "react";

import { Window, WindowContent, WindowHeader } from "react95";

interface IStyles {
  WINDOW: React.CSSProperties;
  WINDOW_CONTENT: React.CSSProperties;
}

const STYLES: IStyles = {
  WINDOW: {
    width: "100%",
    height: "100%",
  },
  WINDOW_CONTENT: {
    marginTop: 16,
  },
};

export const Home: React.FC = (): JSX.Element => {
  const user = useGithubUser("giraudgabriel");
  return (
    <Window shadow={true} style={STYLES.WINDOW}>
      <WindowContent style={STYLES.WINDOW_CONTENT}>
        <WindowHeader>
          <Header />
        </WindowHeader>
        <Card user={user} />
      </WindowContent>
    </Window>
  );
};
