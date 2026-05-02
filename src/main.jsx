import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from "./components/Root/Root.jsx"
import Home from "./components/Home/Home.jsx"
import Installation from './components/Installation/Installation.jsx'
import AllApps from './components/All Apps/AllApps.jsx'
import AppDetails from './components/All Apps/AppDetails.jsx'
import Error from './components/Error/Error.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        loader: () => fetch("/app_data.json"),
        Component: Home
      },
      { 
        path: "/apps", 
        loader: () => fetch("/app_data.json"),
        Component: AllApps 
      },
      {
        path: "/apps/:id",
        loader: () => fetch("/app_data.json"),
        Component: AppDetails
      },
      { path: "installation", Component: Installation }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  </RouterProvider>
)
