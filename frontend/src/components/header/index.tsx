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
import { STYLES, UserContainer } from "./styles";
import { useDispatch } from "react-redux";
import { addWindow } from "@/store/reducers/window/window.reducer";
import { WINDOWS } from "@/data/windows";
import githubService from "@/services/github.service";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const user = useGithubUser(githubService.getUsername());
  const dispatch = useDispatch();

  const closeMenu = () => setOpen(false);

  const openOrCloseMenu = () => setOpen(!open);

  function openMenuItem(item: WindowReducer.Data): void {
    closeMenu();
    dispatch(addWindow(item));
  }

  return (
    <AppBar style={STYLES.APP_BAR}>
      <Toolbar style={STYLES.TOOLBAR}>
        <Button onClick={openOrCloseMenu} active={open} style={STYLES.BUTTON}>
          <UserContainer>
            <Avatar src={user?.avatar_url} size={32} />
            {user?.name}
          </UserContainer>
          {open && (
            <MenuList style={STYLES.MENU} onClick={closeMenu}>
              {WINDOWS.map((item) => (
                <MenuListItem
                  key={item.title}
                  onClick={() => openMenuItem(item)}
                >
                  <span role="img" aria-label={item.icon}>
                    {item.icon}
                  </span>
                  {item.title}
                </MenuListItem>
              ))}
            </MenuList>
          )}
        </Button>
      </Toolbar>
    </AppBar>
  );
};
