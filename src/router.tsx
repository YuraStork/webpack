import { ContentWrapper } from "components/content-wrapper/index"
import { HomePage } from "components/home/index"
import { Navigate, useRoutes } from "react-router-dom"

export const Router = () => {
  const routes = useRoutes([
    { path: '/', element: <Navigate to='/home' /> },
    {
      path: '/', element: <ContentWrapper />, children: [
        { path: 'home', element: <HomePage /> },
        { path: 'about', element: <>About</> },
        { path: 'contacts', element: <>Contacts</> }
      ],
    },
  ])

  return routes
}