import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Info = lazy(() => import("./pages/Info/Info"));
const PublicRoute = lazy(() => import("./components/PublicRoute/PublicRoute"));
const SignUp = lazy(() => import("./pages/SignUp/SignUp"));
const LogIn = lazy(() => import("./pages/LogIn/LogIn"));
const PrivatRoute = lazy(() => import("./components/PrivatRoute/PrivatRoute"));
const ContactPage = lazy(() => import("./components/ContactPage/ContactPage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound/PageNotFound"));

const UserRoutes = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Info />} />
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Route>

        <Route element={<PrivatRoute />}>
          <Route path="/contacts" element={<ContactPage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
