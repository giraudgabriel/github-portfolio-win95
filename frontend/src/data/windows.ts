import { Card } from "@/components/card";

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
    icon: "📁",
    component: Card,
    title: "Files.exe",
    closeable: true,
    image: "📁",
    id: "files",
    minimazable: true,
  },
];

export const COMPONENT_BY_ID = Object.fromEntries(
  WINDOWS.map((x) => [x.id, x.component])
);