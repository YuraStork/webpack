import { AboutPage } from "components/about"
import { ContactsPage } from "components/contacts"
import { ContentWrapper } from "components/common/content-wrapper/index"
import { HomePage } from "components/home/index"
import { Navigate, useRoutes } from "react-router-dom"

export const Router = () => {
  const routes = useRoutes([
    { path: '/', element: <Navigate to='/home' /> },
    {
      path: '/', element: <ContentWrapper />, children: [
        { path: 'home', element: <HomePage /> },
        { path: 'about', element: <AboutPage/> },
        { path: 'contacts', element: <ContactsPage/> }
      ],
    },
  ])

  return routes
}