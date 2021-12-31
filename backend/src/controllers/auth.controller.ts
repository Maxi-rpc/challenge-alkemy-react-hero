import { Request, Response } from "express";
import axios from "axios";
import { authAlkemy } from "../services/index";

export const login = async (req: Request, res: Response) => {
	let data = {
		message: "",
		token: "",
	};

	await axios
		.post(authAlkemy.url, {
			email: req.body.email,
			password: req.body.password,
		})
		.then((resp) => {
			data.message = "success";
			data.token = resp.data.token;
		})
		.catch((error) => {
			data.message = "email y/o password invalido";
		});

	res.json(data);
};
