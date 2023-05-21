import { Card } from "@/components/card";
import { Credits } from "@/components/credits";
import { Settings } from "@/components/settings";
import { Terminal } from "@/components/terminal";
import { SelectOption } from "react95/dist/Select/Select.types";
import { BatExec2, Computer5, ComputerFind, Inetcfg2301, Settings as SettingsIcon, User } from '@react95/icons';
import { Projects } from "@/components/projects";

export const WINDOWS: WindowReducer.Data[] = [
  {
    icon: User({ height: 32, width: 32 }),
    component: Card,
    title: "Profile.exe",
    closeable: true,
    image: "👨‍💻",
    id: "profile",
    minimazable: true,
  },
  {
    title: "Terminal.exe",
    icon: BatExec2({ height: 32, width: 32 }),
    component: Terminal,
    closeable: true,
    image: "🖥️",
    id: "terminal",
    minimazable: true,
    style: {
      padding: 0,
    },
  },
  {
    title: "Settings.exe",
    icon: SettingsIcon({ height: 32, width: 32 }),
    component: Settings,
    closeable: true,
    image: "⚙️",
    id: "settings",
    minimazable: true,
  },
  {
    title: "Credits.exe",
    icon: Inetcfg2301({ height: 32, width: 32 }),
    component: Credits,
    closeable: true,
    image: "💳",
    id: "credits",
    minimazable: true,
  },
  {
    title: "Dev.exe",
    icon: ComputerFind({ height: 32, width: 32 }),
    component: Card,
    closeable: true,
    image: "👨‍💻",
    id: "dev",
    minimazable: true,
    hideInDesktop: true,
  },
  {
    title: "Projects.exe",
    icon: Computer5({ height: 32, width: 32 }),
    component: Projects,
    closeable: true,
    image: "👨‍💻",
    id: "projects",
    minimazable: true,
  }
];

export const COMPONENT_BY_ID = Object.fromEntries(
  WINDOWS.map((x) => [x.id, x.component])
);

export const ICON_BY_ID = Object.fromEntries(
  WINDOWS.map((x) => [x.id, x.icon])
);

export const AVAILABLE_FONTS: SelectOption<string>[] = [
  {
    value: "ms_sans_serif",
    label: "MS Sans Serif",
  },
  {
    value: "Arial",
    label: "Arial",
  },
  {
    value: "monospace",
    label: "Monospace",
  },
  {
    value: "tahoma",
    label: "Tahoma",
  },
  {
    value: "cursive",
    label: "Cursive",
  },
  {
    value: "sans-serif",
    label: "Sans Serif",
  },
  {
    value: "verdana",
    label: "Verdana",
  },
];