import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Firstpage from './firstpage'
import App from './App'

const router = createBrowserRouter([
      {
        path:"/",
        element: <App/>,
      },
      {
        path:  'products',
        element: <Firstpage/>,
      },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
         <RouterProvider router={router}/>
  </StrictMode>
)
