import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

import personRouter from "./routes/personRouter.js";
import typeRouter from "./routes/typeRouter.js";
import orderRouter from "./routes/orderRouter.js";
import positionRouter from "./routes/positionRouter.js";
import orderEmpRouter from "./routes/orderEmpRouter.js"
import swaggerRouter from "./routes/swaggerRouter.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/persons", personRouter);
app.use("/types", typeRouter);
app.use("/orders", orderRouter);
app.use("/positions", positionRouter);
app.use("/orderemps",orderEmpRouter )
app.use("/api", swaggerRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
