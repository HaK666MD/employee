import { Router } from "express";
const router = Router();

import {
  getEmployees,
  getEmployee,
  addEmployee,
  deleteEmployee,
  updateEmployee,
} from "../controllers/personController.js";

/**
 * @swagger
 * components:
 *   schemas:
 *     Person:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - middleName
 *         - age
 *         - sex
 *       properties:
 *         id:
 *           type: number
 *           description: Auto-generated id of the person
 *         firstName:
 *           type: string
 *           description: Person Name
 *         lastName:
 *           type: string
 *           description: Person Surname
 *         middleName:
 *           type: string
 *           description: Person Middle Name
 *         age:
 *           type: string
 *           description: Person Age
 *         sex:
 *           type: string
 *           description: Person Sex (f,m or u)
 *       example:
 *         firstName: "Խաչիկ"
 *         lastName: "Պետրոսյան"
 *         middlename: "Վաչիկի"
 *         age: 25
 *         sex: "m"
 */

/**
 * @swagger
 * tags:
 *   name: Persons
 *   description: Persons managing API
 */

/**
 * @swagger
 * /persons/add:
 *   post:
 *     summary: Add Person
 *     tags: [Persons]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Person'
 *     responses:
 *       200:
 *         description: Person was successfully added
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Person'
 *       500:
 *         description: Server error
 */
router.post("/add", addEmployee);

/**
 * @swagger
 * /persons:
 *   get:
 *     summary: Get all persons
 *     tags: [Persons]
 *     responses:
 *       200:
 *         description: The list of the persons
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Person'
 */
router.get("/", getEmployees);

/**
 * @swagger
 * /persons/{id}:
 *   get:
 *     summary: Get person by id
 *     tags: [Persons]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Person id
 *     responses:
 *       200:
 *         description: Person by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Person'
 *       404:
 *         description: Person not found
 */
router.get("/:id", getEmployee);

/**
 * @swagger
 * /persons/{id}:
 *  put:
 *    summary: Update person by id
 *    tags: [Persons]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Person id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Person'
 *    responses:
 *      200:
 *        description: Person was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Person'
 *      404:
 *        description: Person was not found
 *      500:
 *        description: Some error happened
 */
router.put("/:id", updateEmployee);

/**
 * @swagger
 * /persons/{id}:
 *   delete:
 *     summary: Remove person by id
 *     tags: [Persons]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Person id
 *
 *     responses:
 *       200:
 *         description: Person was deleted
 *       404:
 *         description: Person was not found
 */
router.delete("/:id", deleteEmployee);

export default router;
