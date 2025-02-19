import React from "react"
import App from "./App"
import Navlinkbar from "./navlink"
import Minerals from "./minerals"
import Error from "./Error"
import Default from "./default"
import Groceries from "./groceries"
import Clothes from "./clothes"
import Welcomepage  from './welcomepage'

const routes = [
    {
        path: '/',
        element: <App/>,
        errorElement: <Error/>,
    },
    { path: "/",
      element: <Navlinkbar/>,
        children: [
          {index: false, element: <Default/>},
          {path: 'welcomepage', element: <Welcomepage/>},
          {path: 'groceries', element: <Groceries/>},
          {path: 'clothes', element: <Clothes/>},
          {path: 'minerals', element: <Minerals/>},
      ],
    },
]
export default routes