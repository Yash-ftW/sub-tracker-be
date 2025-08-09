import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send({ title: "GETS All Subscriptions" });
});
subscriptionRouter.get("/:id", (req, res) => {
  res.send({ title: "GET Subscription details" });
});
subscriptionRouter.post("/", (req, res) => {
  res.send({ title: "CREATE a Subscription" });
});
subscriptionRouter.put("/:id", (req, res) => {
  res.send({ title: "UPDATE A Subscription" });
});
subscriptionRouter.delete("/:id", (req, res) => {
  res.send({ title: "DELETE a Subscription" });
});
subscriptionRouter.get("/user/:id", (req, res) => {
  res.send({ title: "GET Subscription by User" });
});
subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send({ title: "CANCEL Subscription by User" });
});
subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({ title: "GET upcoming renewals" });
});

export default subscriptionRouter;
