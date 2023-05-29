import { Router } from "express";

const routes = Router();

routes.post("/users", (req, res) => {
  console.log("users route ", req.body);
  res.status(201).send("user created successfully for  " + req.body.name);
})

export { routes as signUpRoute };