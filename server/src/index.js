import express from "express";
import renderer from "./helpers/renders";
const app = express();

app.use(express.static("public"));
app.get("*", (req, res) => {
  res.send(renderer(req));
});
app.listen(3000, () => {
  console.log("listening on port 3000");
});
