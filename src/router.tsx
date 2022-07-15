import { Navigate, useRoutes } from "react-router-dom";
import { ContentWrapper } from "components/content-wrapper";
import { HomePage } from "pages/home";
import { AboutPage } from "pages/about";
import { ContactsPage } from "pages/contacts";
import { LoginPage } from "pages/auth/login";
import { RegistrationPage } from "pages/auth/registration";
import { UserCabinet } from "pages/userCabinet";
import { getUser } from "store/selectors/user.selector";
import { useAppSelector } from "store/store";

export const Router = () => {
  const { isAuth } = useAppSelector(getUser);
  console.log("ROUTER", isAuth);
  
  const privateRoutes = useRoutes([
    {
      path: "/",
      element: <ContentWrapper />,
      children: [
        { path: "home", element: <HomePage /> },
        { path: "about", element: <AboutPage /> },
        { path: "contacts", element: <ContactsPage /> },
        { path: "cabinet", element: <UserCabinet /> },
        { path: "/", element: <Navigate replace to="/cabinet" /> },
      ],
    },
    { path: "/login", element: <>You have already signed in</> },
    { path: "/registration", element: <>You have already signed up</> },
    { path: "*", element: <div>Not-found</div> },
  ]);

  const authRoutes = useRoutes([
    { path: "/login", element: <LoginPage /> },
    { path: "/registration", element: <RegistrationPage /> },
    { path: "*", element: <Navigate to="/login" /> },
  ]);

  return isAuth ? privateRoutes : authRoutes;
};
