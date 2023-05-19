import {
  Avatar,
  Button,
  MenuList,
  MenuListItem,
} from "react95";

import { useGithubUser } from "@/hooks/useGithubUser";
import { useState } from "react";
import { STYLES, UserContainer } from "./styles";
import { useDispatch } from "react-redux";
import { addWindow } from "@/store/reducers/window/window.reducer";
import { WINDOWS } from "@/data/windows";
import githubService from "@/services/github.service";

export const UserButton = (): JSX.Element => {
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
    <Button onClick={openOrCloseMenu} active={open} style={STYLES.BUTTON}>
      <UserContainer>
        <Avatar src={user?.avatar_url} size={32} />
        {user?.name}
      </UserContainer>
      {open && (
        <MenuList style={STYLES.MENU} onClick={closeMenu}>
          {WINDOWS.map((item) => (
            <MenuListItem
              size="lg"
              key={item.title}
              onClick={() => openMenuItem(item)}
              style={STYLES.MENU_ITEM}
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
  );
};

export const Header = () => {
  return (
    <header style={STYLES.APP_BAR}>
      <UserButton />
    </header>
  );
};
