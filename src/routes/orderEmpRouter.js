import { Router } from "express";
const router = Router();

import {
  createEmpOrder,
  getEmpOrder,
  getEmpOrders,
  updateEmpOrder,
  deleteEmpOrder,
} from "../controllers/orderEmpController.js";

/**
 * @swagger
 * components:
 *   schemas:
 *     OrderEmp:
 *       type: object
 *       required:
 *         - employee_id
 *         - order_id
 *       properties:
 *         id:
 *           type: number
 *           description: Auto-generated id
 *         employee_id:
 *           type: string
 *           description: Employee Id
 *         order_id:
 *           type: string
 *           description: Order Id
 *       example:
 *         employee_id: "2"
 *         order_id: "3"
 */

/**
 * @swagger
 * tags:
 *   name: OrderEmps
 *   description: OrderEmps managing API
 */

/**
 * @swagger
 * /orderemps/create:
 *   post:
 *     summary: Create OrderEmp
 *     tags: [OrderEmps]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OrderEmp'
 *     responses:
 *       200:
 *         description: OrderEmp was successfully added
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OrderEmp'
 *       500:
 *         description: Server error
 */
router.post("/create", createEmpOrder);

/**
 * @swagger
 * /orderemps:
 *   get:
 *     summary: Get all empOrders
 *     tags: [OrderEmps]
 *     responses:
 *       200:
 *         description: The list of empOrders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/OrderEmp'
 */
router.get("/", getEmpOrders);

/**
 * @swagger
 * /orderemps/{id}:
 *   get:
 *     summary: Get empOrder by id
 *     tags: [OrderEmps]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: OrderEmp id
 *     responses:
 *       200:
 *         description: OrderEmp by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OrderEmp'
 *       404:
 *         description: OrderEmp not found
 */
router.get("/:id", getEmpOrder);

/**
 * @swagger
 * /orderemps/{id}:
 *  put:
 *    summary: Update empOrder by id
 *    tags: [OrderEmps]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: OrderEmp id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/OrderEmp'
 *    responses:
 *      200:
 *        description: OrderEmp was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/OrderEmp'
 *      404:
 *        description: OrderEmp was not found
 *      500:
 *        description: Some error happened
 */
router.put("/:id", updateEmpOrder);

/**
 * @swagger
 * /orderemps/{id}:
 *   delete:
 *     summary: Remove empOrder by id
 *     tags: [OrderEmps]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: OrderEmp id
 *
 *     responses:
 *       200:
 *         description: OrderEmp was deleted
 *       404:
 *         description: OrderEmp was not found
 */
router.delete("/:id", deleteEmpOrder);

export default router;
