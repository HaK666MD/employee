import { Router } from "express";
const router = Router();

import {
  createPosition,
  getPositions,
  getPosition,
  updatePosition,
  deletePosition,
} from "../controllers/positionController.js";

/**
 * @swagger
 * components:
 *   schemas:
 *     Position:
 *       type: object
 *       required:
 *         - employee_id
 *         - position
 *         - salary
 *         - start_date
 *         - end_date
 *       properties:
 *         id:
 *           type: number
 *           description: Auto-generated id of the position
 *         employee_id:
 *           type: string
 *           description: Employee Id
 *         position:
 *           type: string
 *           description: Employee Position
 *         salary:
 *           type: number
 *           description: Employee Salary
 *         start_date:
 *           type: number
 *           description: Start Date
 *         end_date:
 *           type: number
 *           description: End Date
 *       example:
 *           employee_id: 1
 *           position: "Web"
 *           salary: "1000"
 *           start_date: "20220303"
 *           end_date: 
 */

/**
 * @swagger
 * tags:
 *   name: Positions
 *   description: Position managing API
 */

/**
 * @swagger
 * /positions/create:
 *   post:
 *     summary: Create Position
 *     tags: [Positions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Position'
 *     responses:
 *       200:
 *         description: Position was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       500:
 *         description: Server error
 */
router.post("/create", createPosition);

/**
 * @swagger
 * /positions:
 *   get:
 *     summary: Get all positions
 *     tags: [Positions]
 *     responses:
 *       200:
 *         description: The list of positions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Position'
 */
router.get("/", getPositions);

/**
 * @swagger
 * /positions/{id}:
 *   get:
 *     summary: Get position by id
 *     tags: [Positions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Position id
 *     responses:
 *       200:
 *         description: Position by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Position'
 *       404:
 *         description: Position not found
 */
router.get("/:id", getPosition);

/**
 * @swagger
 * /positions/{id}:
 *  put:
 *    summary: Update position by id
 *    tags: [Positions]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Position id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Position'
 *    responses:
 *      200:
 *        description: Position was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Position'
 *      404:
 *        description: Position was not found
 *      500:
 *        description: Some error happened
 */
router.put("/:id", updatePosition);

/**
 * @swagger
 * /positions/{id}:
 *   delete:
 *     summary: Remove position by id
 *     tags: [Positions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Position id
 *
 *     responses:
 *       200:
 *         description: Position was deleted
 *       404:
 *         description: Position was not found
 */
router.delete("/:id", deletePosition);

export default router;
