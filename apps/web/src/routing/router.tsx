import { Route, Routes } from "react-router";
import type { RouterType } from "./router.types";
import routerData from "./routerData";

export default function Rotuer() {
  const routeData = routerData.map(({ path, title, element }: RouterType) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return <Routes>{routeData}</Routes>;
}
