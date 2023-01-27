import { useRoutes } from "react-router-dom";
import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";
import { useAuth } from "@/context/auth/authContextProvider";

export const AppRoutes = () => {
  const auth = useAuth();
  console.log("auth", auth);

  // const commonRoutes = [{ path: "/", element: <Landing /> }];

  const routes = auth.user ? protectedRoutes : publicRoutes;

  // const element = useRoutes([...routes, ...commonRoutes]);
  const element = useRoutes([...publicRoutes, ...protectedRoutes]); // ...commonRoutes

  return <>{element}</>;
};
