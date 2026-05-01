import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from "./components/Root/Root.jsx"
import Home from "./components/Home/Home.jsx"
import Apps from './components/Apps/Apps.jsx'
import Installation from './components/Installation/Installation.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {index: true, Component: Home },
      {path: "apps", Component: Apps},
      {path: "installation", Component: Installation}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router ={router}>
  </RouterProvider>
)
