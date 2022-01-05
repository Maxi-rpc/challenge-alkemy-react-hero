import { NavBar, Card } from "../../components/index";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { GetHeroName } from "../../utils/index";
import { useState } from "react";

export default function Search() {
	const [heroes, setHeroes] = useState([]);

	const searchHero = async ({ search }) => {
		const data = await GetHeroName({ search });
		setHeroes(data.hero.results);
	};

	return (
		<>
			<div className="container-fluid bg-dark text-light">
				<div className="row">
					<div className="col-12">
						<NavBar></NavBar>
					</div>
				</div>
				<section className="my-5">
					<div className="row justify-content-center text-center">
						<div className="col-md-6">
							<h1>Buscar Heroe o Villano</h1>
							<Formik
								// valores de los inputs
								initialValues={{ search: "" }}
								// validar errores
								validate={(valores) => {
									let errores = {};

									// validar
									if (!valores.search) {
										errores.search = "El campo no puede estar vacío";
									}

									// devolver obj errores
									return errores;
								}}
								// envio de formulario
								onSubmit={(valores, { resetForm }) => {
									//resetForm();
									console.log(valores);
									searchHero(valores);
								}}
							>
								{({ errors }) => (
									<Form>
										<div className="row justify-content-center">
											<div className="col-auto">
												<Field
													type="text"
													className="form-control"
													id="search"
													name="search"
													placeholder="nombre"
												/>
												<ErrorMessage
													name="search"
													component={() => (
														<div className="error-input">{errors.search}</div>
													)}
												></ErrorMessage>
											</div>
											<div className="col-auto">
												<button type="submit" className="btn btn-primary mb-3">
													Buscar
												</button>
											</div>
										</div>
									</Form>
								)}
							</Formik>
						</div>
					</div>
				</section>
				<section>
					<div className="">
						<div className="card-group">
							{heroes.map((singleHero) => (
								<Card hero={singleHero}></Card>
							))}
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
