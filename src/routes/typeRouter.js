import { Router } from "express";
const router = Router();

import {
  addType,
  getType,
  getTypes,
  updateType,
  deleteOrderType,
} from "../controllers/typeController.js";

/**
 * @swagger
 * components:
 *   schemas:
 *     Type:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: number
 *           description: Auto-generated id of the type
 *         name:
 *           type: string
 *           description: Name of Type
 *       example:
 *         name: "Ընդունում"
 */

/**
 * @swagger
 * tags:
 *   name: Types
 *   description: Types managing API
 */

/**
 * @swagger
 * /types/add:
 *   post:
 *     summary: Add Type
 *     tags: [Types]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Type'
 *     responses:
 *       200:
 *         description: Type was successfully added
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Type'
 *       500:
 *         description: Server error
 */
router.post("/add", addType);

/**
 * @swagger
 * /types:
 *   get:
 *     summary: Get all types
 *     tags: [Types]
 *     responses:
 *       200:
 *         description: The list of types
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Type'
 */
router.get("/", getTypes);

/**
 * @swagger
 * /types/{id}:
 *   get:
 *     summary: Get type by id
 *     tags: [Types]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Type id
 *     responses:
 *       200:
 *         description: Type by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Type'
 *       404:
 *         description: Type not found
 */
router.get("/:id", getType);

/**
 * @swagger
 * /types/{id}:
 *  put:
 *    summary: Update type by id
 *    tags: [Types]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Type id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Type'
 *    responses:
 *      200:
 *        description: Type was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Type'
 *      404:
 *        description: Type was not found
 *      500:
 *        description: Some error happened
 */
router.put("/:id", updateType);

/**
 * @swagger
 * /types/{id}:
 *   delete:
 *     summary: Remove type by id
 *     tags: [Types]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Type id
 *
 *     responses:
 *       200:
 *         description: Type was deleted
 *       404:
 *         description: Type was not found
 */
router.delete("/:id", deleteOrderType);

export default router;
