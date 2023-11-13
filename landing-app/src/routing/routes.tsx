import React from 'react';
import { Outlet } from "react-router-dom";
import { Main } from '../components/pages/main';
import { NavigationManager } from '../components/managers/navigation-manager';


export const routes = [
  {
    path: "/",
    element: (
      <NavigationManager>
        <Outlet />
      </NavigationManager>
    ),
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "main",
        element: <Main />,
      },
      // {
      //   path: "page-b",
      //   element: <PageB />,
      // },
    ],
  },
];