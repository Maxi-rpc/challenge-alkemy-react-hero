import axios from "axios";
import Backend from "../services/index";

export const getHeroRandom = async () => {
	let data = {
		message: "",
		hero: "",
	};

	await axios
		.get(Backend.backend_hero)
		.then((resp) => {
			data.hero = resp.data;
		})
		.catch((error) => {
			data.message = error;
		});

	return data;
};
