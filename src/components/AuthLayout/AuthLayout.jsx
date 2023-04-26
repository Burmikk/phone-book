import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { current } from "../../redux/auth/auth-operations";
import styles from "./auth-layout.module.scss";

const AuthLayout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return <div className={styles.container}>{children}</div>;
};

AuthLayout.propTypes = {
  children: PropTypes.element,
};

export default AuthLayout;
