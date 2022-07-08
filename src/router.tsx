import { Navigate, useRoutes } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "context/auth.context"
import { ContentWrapper } from "components/content-wrapper"
import { HomePage } from "pages/home"
import { AboutPage } from "pages/about"
import { ContactsPage } from "pages/contacts"
import { LoginPage } from "pages/auth/login"
import { RegistrationPage } from "pages/auth/registration"

export const Router = () => {
  const { isAuth } = useContext(AuthContext)

  const privateRoutes = useRoutes([
    { path: '/', element: <Navigate to='/home' /> },
    {
      path: '/', element: <ContentWrapper />, children: [
        { path: 'home', element: <HomePage /> },
        { path: 'about', element: <AboutPage /> },
        { path: 'contacts', element: <ContactsPage /> },
      ],
    },
    { path: '/login', element: <>You have already signed in</> },
    { path: '/registration', element: <>You have already signed up</> },
    { path: '*', element: <div>Not-found</div> },
  ])

  const authRoutes = useRoutes([
    { path: '/login', element: <LoginPage /> },
    { path: '/registration', element: <RegistrationPage /> },
    { path: '*', element: <Navigate to='/login' /> },
  ])

  return isAuth ? privateRoutes : authRoutes;
}