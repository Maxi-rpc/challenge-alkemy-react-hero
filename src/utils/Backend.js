import axios from "axios";
import Backend from "../services/index";

export const getHeroRandom = async () => {
	let data = "";

	await axios
		.get(Backend.backend_hero)
		.then((resp) => {
			data = resp.data;
		})
		.catch((error) => {
			data = error;
		});

	return data;
};
