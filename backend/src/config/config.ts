// imp lib var de entorno
import dotenv from "dotenv";
// leer var
dotenv.config();

export default {
  PORT: process.env.PORT || 4000,
};
