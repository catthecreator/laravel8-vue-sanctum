import { APP_NAME } from "../.env"
export const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("../pages/Index"),
    meta: { title: `${APP_NAME} | Главная` }
  },
  // {
  //   path: "/news",
  //   name: "news",
  //   component: newsPage,
  //   meta: { title: `${APP_NAME} | news` },
  //   props: routePropResolver
  // },
  // {
  //   path: "/profile",
  //   component: profilePage,
  //   meta: { isAuth: true, title: `${APP_NAME} | profile` },
  //   children: [
  //     {
  //       path: "",
  //       name: "profile",
  //       component: profilePostsPage
  //     }
  //   ]
  // },
  // {
  //   path: "/login",
  //   name: "login",
  //   component: loginPage,
  //   meta: { title: `${APP_NAME} | login` }
  // },
  // {
  //   path: "*",
  //   component: notFoundPage,
  //   meta: { title: `${APP_NAME} | not found` }
  // }
];
