import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Places from "./pages/Places";
import PlacesCenter from "./pages/PlacesCenter";
import PlacesChina from "./pages/PlacesChina";
import PlacesSouth from "./pages/PlacesSouth";

import AnimatedCursor from 'react-animated-cursor';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { MantineProvider } from '@mantine/core';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/map",
    element: <Places />,
  },
  { path: "/mapCenter",
    element: <PlacesCenter />,
  },
  { path: "/mapChina",
    element: <PlacesChina />,
  },
  { path: "/mapSouth",
    element: <PlacesSouth />,
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <MantineProvider>

      <AnimatedCursor
      innerSize={18}
      outerSize={25}
      innerScale={1.5}
      outerScale={1.5}
      outerAlpha={0.2}
      trailingSpeed={10}
      color='0, 0, 0'/>

      <RouterProvider router={router} />


    </MantineProvider>


  </React.StrictMode>
);

