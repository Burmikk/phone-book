import { useMemo } from "react";
import styles from "./login.module.scss";
import { useDispatch } from "react-redux";
import { login } from "redux/auth/auth-operations";
import { RotatingLines } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { selectorLoading, selectorError } from "redux/auth/auth-selectors";
// Для отображения нотификашек
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Для работы с библиотекой Formik
import { Field, Form, Formik, ErrorMessage } from "formik";
// Для валидации форм
import { object, string, number, date, InferType } from "yup";

const userSchema = object({
  email: string().email().required(),
  password: string().min(7).required(),
});

const initialValues = {
  email: "",
  password: "",
};

const LogIn = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectorLoading);
  const error = useSelector(selectorError);

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  const notify = () =>
    toast.error("Something went wrong, check your email and password", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  useMemo(() => {
    if (error) {
      return notify();
    }
  }, [error]);

  return (
    <div>
      {loading ? (
        <div className={styles.spiner}>
          <RotatingLines
            strokeColor="white"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </div>
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={userSchema}
          onSubmit={handleSubmit}
        >
          <Form className={styles.form}>
            <label>Email</label>
            <Field className={styles.input} type="email" name="email" />
            <ErrorMessage
              name="email"
              render={(msg) => <p className={styles.error}>{msg}</p>}
            />
            <label>Password</label>
            <Field className={styles.input} type="password" name="password" />
            <ErrorMessage
              name="password"
              render={(msg) => <p className={styles.error}>{msg}</p>}
            />
            <button className={styles.btn}>Log In</button>
          </Form>
        </Formik>
      )}
      <ToastContainer transition={Slide} />
    </div>
  );
};

export default LogIn;
