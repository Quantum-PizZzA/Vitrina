import Home from "@/views/Home";

import Register from "@/store/Register";
import SignIn from "@/store/SignIn";

import Showcases from "@/components/Showcases";
import MyShowcases from "@/components/MyShowcases";

export const ROUTES = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Регистрация",
    component: Register,
  },
  {
    path: "/signin",
    name: "Авторизация",
    component: SignIn,
  },
  {
    path: "/showcases",
    name: "Showcases",
    component: Showcases,
  },
];

export const NOT_AUTH_ROUTES = [
  {
    path: "/register",
    name: "Регистрация",
    component: Register,
  },
  {
    path: "/signin",
    name: "Войти",
    component: SignIn,
  },
  {
    path: "/showcases",
    name: "Товары",
    component: Showcases,
  },
];

export const AUTH_ROUTES = [
  {
    path: "/showcases",
    name: "Товары",
    component: Showcases,
  },
  {
    path: "/myshowcases",
    name: "Мои товары",
    component: MyShowcases,
  },
];
