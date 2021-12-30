import { API } from "./api.service";
import { AUTH_URL, AUTH_EMAIL, AUTH_PASSWORD } from "./auth.service";

export const api = API;
export const authAlkemy = {
	url: AUTH_URL,
	email: AUTH_EMAIL,
	pass: AUTH_PASSWORD,
};
