import {
  AppBar,
  Avatar,
  Button,
  MenuList,
  MenuListItem,
  Toolbar,
} from "react95";

import { useGithubUser } from "@/hooks/useGithubUser";
import { useState } from "react";
import { UserContainer } from "./styles";

interface IHeaderStyles {
  MENU: React.CSSProperties;
  APP_BAR: React.CSSProperties;
  BUTTON: React.CSSProperties;
}
const STYLES: IHeaderStyles = {
  MENU: {
    position: "absolute",
    left: "0",
    top: "100%",
  },
  APP_BAR: {
    width: "100%",
    height: "4rem",
  },
  BUTTON: {
    width: "15rem",
    height: "3rem",
  },
};

export const Header = () => {
  const [open, setOpen] = useState(false);
  const user = useGithubUser("giraudgabriel");

  const closeMenu = () => setOpen(false);

  const openOrCloseMenu = () => setOpen(!open);

  return (
    <AppBar style={STYLES.APP_BAR}>
      <Toolbar>
        <Button onClick={openOrCloseMenu} active={open} style={STYLES.BUTTON}>
          <UserContainer>
            <Avatar src={user?.avatar_url} size={32} />
            {user?.name}
          </UserContainer>
        </Button>
        {open && (
          <MenuList style={STYLES.MENU} onClick={closeMenu}>
            <MenuListItem>
              <span role="img" aria-label="👨‍💻">
                👨‍💻
              </span>
              Profile
            </MenuListItem>
          </MenuList>
        )}
      </Toolbar>
    </AppBar>
  );
};
