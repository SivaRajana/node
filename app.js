import express from "express";
import { StatusCodes } from "http-status-codes"
import { signUpRoute } from "./src/routes/signUp.js";

const app = express();

app.use(express.json()) // its a middleware and pass our body to express

app.get('/get', (req, res) => {
  res.status(StatusCodes.OK).send({
    method: "GET",
    url: "/get",
    data: {
      status: "OK"
    }
  })
  console.log("testong");
});

app.use(signUpRoute);

export default app;