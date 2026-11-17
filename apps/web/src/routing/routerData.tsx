import Home from "@/pages/home";
import type { RouterType } from "./router.types";
import About from "@/pages/about";

const routerData: RouterType[] = [
  {
    path: "",
    element: <Home />,
    title: "Home Page"
  },
  {
    path: "about",
    element: <About />,
    title: "About Page"
  }
];

export default routerData;
