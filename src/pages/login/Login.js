import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Login.css";

export default function Login() {
	/* const [heroData, setheroData] = useState();

	const fetchData = async () => {
		const data = await GetHeroRandom();
		setheroData(data.hero);
	};

	useEffect(() => {
		fetchData();
	}, []);

	console.log(heroData); */

	return (
		<>
			<div className="fullscreen">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-6">
							<h1 className="text-center h3">Iniciar Sesion</h1>
							<div class="alert alert-primary" role="alert">
								Utilizar las siguientes credenciales: <br />
								<strong>email: challenge@alkemy.org / password: react</strong>
							</div>
							<div className="card text-light bg-dark py-4">
								<div className="card-body">
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
												errores.email = "El campo Email no puede estar vacio";
											} else if (
												!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
													valores.email
												)
											) {
												errores.email = "El Email debe ser valido";
											}

											// validar password
											if (!valores.password) {
												errores.password =
													"El campo password no puede estar vacio";
											}

											// devolver obj errores
											return errores;
										}}
										// envio de formulario
										onSubmit={(valores, { resetForm }) => {
											resetForm();
											console.log(valores);
											console.log("form submit");
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
															<div className="error-input">
																{errors.password}
															</div>
														)}
													></ErrorMessage>
												</div>
												<div className="text-center mt-4">
													<button className="btn btn-primary">
														Iniciar Sesion
													</button>
												</div>
											</Form>
										)}
									</Formik>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
