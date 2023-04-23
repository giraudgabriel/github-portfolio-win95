import {
  AppBar,
  Avatar,
  Button,
  MenuList,
  MenuListItem,
  Separator,
  Toolbar,
} from "react95";

import { useGithubUser } from "@/hooks/useGithubUser";
import { useState } from "react";
import { HeaderContainer, UserContainer, UserImage } from "./styles";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const user = useGithubUser("giraudgabriel");
  return (
    <AppBar>
      <Toolbar>
        <HeaderContainer>
          <Button onClick={() => setOpen(!open)} active={open}>
            <UserContainer>
              <Avatar src={user?.avatar_url} size={32} />
              {user?.name}
            </UserContainer>
          </Button>
          {open && (
            <MenuList
              style={{
                position: "absolute",
                left: "0",
                top: "100%",
              }}
              onClick={() => setOpen(false)}
            >
              <MenuListItem>
                <span role="img" aria-label="👨‍💻">
                  👨‍💻
                </span>
                Profile
              </MenuListItem>
              <MenuListItem>
                <span role="img" aria-label="📁">
                  📁
                </span>
                My account
              </MenuListItem>
              <Separator />
              <MenuListItem disabled>
                <span role="img" aria-label="🔙">
                  🔙
                </span>
                Logout
              </MenuListItem>
            </MenuList>
          )}
        </HeaderContainer>
      </Toolbar>
    </AppBar>
  );
};
