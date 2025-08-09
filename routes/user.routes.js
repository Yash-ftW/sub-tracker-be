import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send({ title: "GETS All Users" });
});

userRouter.get("/:id", (req, res) => {
  res.send({ title: "GETS User Details" });
});

userRouter.post("/", (req, res) => {
  res.send({ title: "CREATE New Users" });
});

userRouter.put("/:id", (req, res) => {
  res.send({ title: "UPDATE User by id" });
});

userRouter.delete("/:id", (req, res) => {
  res.send({ title: "DELETE a User" });
});

export default userRouter;
