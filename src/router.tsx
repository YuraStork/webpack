import { AboutPage } from "components/about"
import { ContactsPage } from "components/contacts"
import { ContentWrapper } from "components/common/content-wrapper/index"
import { HomePage } from "components/home/index"
import { Navigate, useRoutes } from "react-router-dom"
import { LoginPage } from "components/auth/login"
import { RegistrationPage } from "components/auth/registration"

export const Router = () => {
  const isAuth = true;
  const privateRoutes = useRoutes([
    { path: '/', element: <Navigate to='/home' /> },
    {
      path: '/', element: <ContentWrapper />, children: [
        { path: 'home', element: <HomePage /> },
        { path: 'about', element: <AboutPage /> },
        { path: 'contacts', element: <ContactsPage /> },
      ],
    },
    { path: '/login', element: <LoginPage /> },
    { path: '/registration', element: <RegistrationPage /> },
    { path: '*', element: <div>Not-found</div> },
  ])

  const authRoutes = useRoutes([
    { path: '/login', element: <LoginPage /> },
    { path: '/registration', element: <RegistrationPage /> },
    { path: '*', element: <Navigate to='/login' /> },
  ])

  return isAuth ? privateRoutes : authRoutes;
}