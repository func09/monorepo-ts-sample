import express from "express";
import Router from "express-promise-router";
import { PrismaClient } from "common/prisma/client";

const router = Router();
router.get("/ping", async (req, res) => {
  const client = new PrismaClient();
  res.send(`Pong!`);
});

export default router;
