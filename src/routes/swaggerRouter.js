import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

import { Router } from "express";
const router = Router();

export const specs = swaggerJsDoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API",
      version: "1.0.0",
      description: "Simple API",
    },
    servers: [
      {
        url: "http://localhost:3003",
      },
    ],
  },
  apis: ["./src/routes/*.js"],
});

router.use("/docs", swaggerUi.serve);
router.get("/docs", swaggerUi.setup(specs));

export default router;
