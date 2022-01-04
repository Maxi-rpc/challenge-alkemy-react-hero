import "./Login.css";
import { FormLogin } from "../../components/index";

export default function LoginPage() {
  return (
    <>
      <div className="fullscreen">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h1 className="text-center h3">Iniciar Sesion</h1>
              <div className="alert alert-primary" role="alert">
                Utilizar las siguientes credenciales: <br />
                <strong>email: challenge@alkemy.org / password: react</strong>
              </div>
              <div className="card text-light bg-dark py-4">
                <div className="card-body">
                  <FormLogin></FormLogin>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
