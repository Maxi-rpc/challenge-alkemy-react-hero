import axios from "axios";
import { BACKEND_HERO_SEARCH } from "../services/Apirest";
import Backend from "../services/index";

let data = {
  message: "",
  hero: {},
};

export const getHeroRandom = async () => {
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

export const getHeroName = async ({ search }) => {
  await axios
    .get(BACKEND_HERO_SEARCH + search)
    .then((resp) => {
      data.hero = resp.data;
    })
    .catch((error) => {
      data.message = error;
    });

  return data;
};

export const login = async ({ email, password }) => {
  let authData = {
    message: "",
    token: "",
  };

  await axios
    .post(Backend.backend_auth, {
      email: email,
      password: password,
    })
    .then((resp) => {
      authData.message = resp.data.message;
      authData.token = resp.data.token;
    })
    .catch((error) => {
      authData.message = error;
    });

  return authData;
};
