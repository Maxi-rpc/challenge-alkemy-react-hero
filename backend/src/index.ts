import app from "./app";

function main() {
  app.listen(app.get("port"));
  console.log("Server backend run on: " + app.get("port"));
}

main();
