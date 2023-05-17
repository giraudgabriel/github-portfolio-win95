import { WINDOWS } from "@/data/windows";
import { STYLES } from "@/pages/home/styles";
import windowService from "@/services/window.service";
import { addWindow } from "@/store/reducers/window/window.reducer";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, MenuList, MenuListItem, Toolbar } from "react95";

export const Footer = ({ windows }: { windows: WindowReducer.Data[] }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const closeMenu = () => setOpen(false);

  const openOrCloseMenu = () => setOpen(!open);

  function openMenuItem(item: WindowReducer.Data): void {
    closeMenu();
    dispatch(addWindow(item));
  }

  return (
    <footer>
      {open && (
        <MenuList style={STYLES.MENU} onClick={closeMenu}>
          {WINDOWS.filter(x => !x?.hideInDesktop).map((item) => (
            <MenuListItem
              size="lg"
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
      <Toolbar style={STYLES.TOOLBAR}>
        <Button
          onClick={openOrCloseMenu}
          active={open}
          variant="menu"
          size="lg"
        >
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
    </footer>
  );
};
