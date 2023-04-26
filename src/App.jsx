import { BrowserRouter } from "react-router-dom";
import UserRoutes from "UserRoutes";

import NavBar from "./components/NavBar/NavBar";
import AuthLayout from "./components/AuthLayout/AuthLayout";

export const App = () => {
  return (
    <AuthLayout>
      <BrowserRouter>
        <NavBar />
        <UserRoutes />
      </BrowserRouter>
    </AuthLayout>
  );
};
