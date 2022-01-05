import { login, getHeroRandom, getHeroName } from "./Backend";
import privateRoutes from "./PrivateRoutes";

export const GetHeroRandom = getHeroRandom;
export const GetHeroName = getHeroName;
export const Login = login;
export const PrivateRoutes = privateRoutes;
