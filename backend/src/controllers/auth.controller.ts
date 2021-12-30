import { Request, Response } from "express";
import axios from "axios";
import { authAlkemy } from "../services/index";

export const login = async (req: Request, res: Response) => {
	let token: string;
	await axios
		.post(authAlkemy.url, {
			email: authAlkemy.email,
			password: authAlkemy.pass,
		})
		.then((resp) => {
			token = resp.data;
		})
		.catch((error) => {
			token = error;
		});

	res.json(token);
};
