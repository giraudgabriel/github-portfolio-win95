import { Card } from "@/components/card";
import { Credits } from "@/components/credits";
import { Settings } from "@/components/settings";
import { Terminal } from "@/components/terminal";
import { SelectOption } from "react95/dist/Select/Select.types";

export const WINDOWS: WindowReducer.Data[] = [
  {
    icon: "👨‍💻",
    component: Card,
    title: "Profile.exe",
    closeable: true,
    image: "👨‍💻",
    id: "profile",
    minimazable: true,
  },
  {
    title: "Terminal.exe",
    icon: "🖥️",
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
    icon: "⚙️",
    component: Settings,
    closeable: true,
    image: "⚙️",
    id: "settings",
    minimazable: true,
  },
  {
    title: "Credits.exe",
    icon: "💳",
    component: Credits,
    closeable: true,
    image: "💳",
    id: "credits",
    minimazable: true,
  },
  {
    title: "Dev.exe",
    icon: "👨‍💻",
    component: Card,
    closeable: true,
    image: "👨‍💻",
    id: "dev",
    minimazable: true,
    hideInDesktop: true,
  }
];

export const COMPONENT_BY_ID = Object.fromEntries(
  WINDOWS.map((x) => [x.id, x.component])
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