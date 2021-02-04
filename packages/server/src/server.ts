import express from "express";
import PingRouter from "@/routes/ping";

const app = express();
app.use(PingRouter);

app.listen(3000, () => {
  console.log("listening on port 3000!");
});
