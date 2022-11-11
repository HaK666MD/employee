import { Router } from "express";
const router = Router();

import {
  createOrder,
  getOrders,
  getOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/orderController.js";

/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       required:
 *         - name
 *         - order_type_id
 *         - employee_position_id
 *       properties:
 *         id:
 *           type: number
 *           description: Auto-generated id of the type
 *         name:
 *           type: string
 *           description: Number of Order
 *         order_type_id:
 *           type: string
 *           description: Order Type Id
 *         employee_position_id:
 *           type: string
 *           description: Employee Position Id
 *       example:
 *         name: "N85"
 *         order_type_id: "2"
 *         employee_position_id: "1"
 */

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Orders managing API
 */

/**
 * @swagger
 * /orders/create:
 *   post:
 *     summary: Create Order
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       200:
 *         description: Order was successfully added
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       500:
 *         description: Server error
 */
router.post("/create", createOrder);

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Get all orders
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: The list of orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 */
router.get("/", getOrders);

/**
 * @swagger
 * /orders/{id}:
 *   get:
 *     summary: Get order by id
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Order id
 *     responses:
 *       200:
 *         description: Order by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       404:
 *         description: Order not found
 */
router.get("/:id", getOrder);

/**
 * @swagger
 * /orders/{id}:
 *  put:
 *    summary: Update order by id
 *    tags: [Orders]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Order id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Order'
 *    responses:
 *      200:
 *        description: Order was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Order'
 *      404:
 *        description: Order was not found
 *      500:
 *        description: Some error happened
 */
router.put("/:id", updateOrder);

/**
 * @swagger
 * /orders/{id}:
 *   delete:
 *     summary: Remove order by id
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Order id
 *
 *     responses:
 *       200:
 *         description: Order was deleted
 *       404:
 *         description: Order was not found
 */
router.delete("/:id", deleteOrder);

export default router;
