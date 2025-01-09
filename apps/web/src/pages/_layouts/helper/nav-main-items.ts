import { Settings2, Square } from "lucide-react";


export const navMainItems = [
  {
    id:"main-playground",
    title: "Playground",
    isActive: true,
    icon: Square,
    items: [
      {
        id: "home",
        title: "Home",
        url: "/",
      },
  
    ],
  },
  {
    id: "main-settings",
    title: "Settings",
    icon: Settings2,
    items: [
      {
        id: "settings",
        title: "General",
        url: "/settings",
      }
    ],
  },
]