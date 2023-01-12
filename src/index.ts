import express from "express";
import dotenv from "dotenv";
import home from "./routes/home";
import bodyParser from "body-parser";

const app = express();
dotenv.config();
const port = process.env.PORT;

app.use("/form", express.static("assets"));

// app.use(express.json()); // for post
// app.use(express.urlencoded()); // for post
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use("/velocity", home);

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
