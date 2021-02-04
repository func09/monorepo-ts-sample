import express from "express";
import Router from "express-promise-router";

const router = Router();
router.get("/ping", (req, res) => {
  res.send("pong");
});

export default router;
