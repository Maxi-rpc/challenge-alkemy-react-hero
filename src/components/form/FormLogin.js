import { Formik, Form, Field, ErrorMessage } from "formik";
import "./FormLogin.css";
import { Login } from "../../utils/index";
import { useState } from "react";
//import { Navigate } from "react-router-dom";

export default function FormLogin() {
  const [errorMessage, seterrorMessage] = useState(false);

  // verifica logeo
  /* const token = localStorage.getItem("token");
  if (token) {
    return <Navigate to="/home" />;
  } */

  const validateLogin = async (valores) => {
    const data = await Login(valores);
    console.log(data);
    if (data.token === "") {
      seterrorMessage(true);
    } else {
      seterrorMessage(false);
      /* const token = localStorage.setItem("token", data.token);
      if(token){
          return <Navigate to="/home" />;
      } */
    }
  };

  return (
    <>
      <Formik
        // valores de los inputs
        initialValues={{
          email: "",
          password: "",
        }}
        // validar errores
        validate={(valores) => {
          let errores = {};

          // validar email
          if (!valores.email) {
            errores.email = "El campo Email no puede estar vacío";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.email
            )
          ) {
            errores.email = "El Email debe ser valido";
          }

          // validar password
          if (!valores.password) {
            errores.password = "El campo password no puede estar vacío";
          }

          // devolver obj errores
          return errores;
        }}
        // envio de formulario
        onSubmit={(valores, { resetForm }) => {
          //resetForm();
          validateLogin(valores);
        }}
      >
        {({ errors }) => (
          // formulario
          <Form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <Field
                className="form-control text-light bg-dark"
                type="email"
                name="email"
                id="email"
              />
              <ErrorMessage
                name="email"
                component={() => (
                  <div className="error-input">{errors.email}</div>
                )}
              ></ErrorMessage>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <Field
                className="form-control text-light bg-dark"
                type="password"
                name="password"
                id="password"
              />
              <ErrorMessage
                name="password"
                component={() => (
                  <div className="error-input">{errors.password}</div>
                )}
              ></ErrorMessage>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Iniciar Sesion
              </button>
            </div>
          </Form>
        )}
      </Formik>
      {errorMessage && (
        <div
          className="alert alert-warning alert-dismissible fade show mt-2"
          role="alert"
        >
          Por favor ingresar credenciales validas.
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => seterrorMessage(false)}
          ></button>
        </div>
      )}
    </>
  );
}
