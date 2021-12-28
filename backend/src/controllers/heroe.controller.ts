import { Request, Response } from "express";
import axios from "axios";

// imp api
import { api } from "../services/index";

// num random entre el min y max de heroes y villanos existentes en la api
function numRandom(min: number = 1, max: number = 731) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const getHeroeRandom = async (req: Request, res: Response) => {
  const num = await numRandom();
  let hero = {};
  await axios
    .get(api + num)
    .then((resp) => {
      hero = resp.data;
    })
    .catch((error) => {
      hero = error;
    });

  res.json(hero);
};

export const getHeroeById = async (req: Request, res: Response) => {
  let heroId = req.params.id;
  let hero = {};
  await axios
    .get(api + heroId)
    .then((resp) => {
      hero = resp.data;
    })
    .catch((error) => {
      hero = error;
    });

  res.json(hero);
};

export const getHeroeByName = async (req: Request, res: Response) => {
  let heroName = req.params.name;
  let hero = {};

  await axios
    .get(api + "search/" + heroName)
    .then((resp) => {
      hero = resp.data;
    })
    .catch((error) => {
      hero = error;
    });

  res.json(hero);
};
