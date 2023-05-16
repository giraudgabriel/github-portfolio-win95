import { Card } from "@/components/card";
import { Contact } from "@/components/contact";
import { Files } from "@/components/files";
import { Projects } from "@/components/projects";
import { Settings } from "@/components/settings";
import { Terminal } from "@/components/terminal";

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
    component: Files,
    title: "Files.exe",
    closeable: true,
    image: "📁",
    id: "files",
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
    title: "Contact.exe",
    icon: "📞",
    component: Contact,
    closeable: true,
    image: "📞",
    id: "contact",
    minimazable: true,
  },
  {
    title: "Projects.exe",
    icon: "📁",
    component: Projects,
    closeable: true,
    image: "📁",
    id: "projects",
    minimazable: true,
  },
];

export const COMPONENT_BY_ID = Object.fromEntries(
  WINDOWS.map((x) => [x.id, x.component])
);