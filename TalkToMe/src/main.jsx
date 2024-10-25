import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
// component  import
import HomePage from './component/HomePage.jsx'
import NotFound from './component/NotFound.jsx'
import ChatBot from './component/ChatBot.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>,
    errorElement:<NotFound/>
  },
  {
    path:"*",
    element:<NotFound/>
  },
  {
    path:"/chat",
    element:<ChatBot/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <Outlet />
    </ RouterProvider >
  </StrictMode>,
)
