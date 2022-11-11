import { EmployeePosition } from "../models/index.js";

export const add = async (body) =>
  await new EmployeePosition({ ...body }).save();

export const getAll = async () =>
  await new EmployeePosition().fetchAll({
    withRelated: ["employee"],
  });

export const getOne = async (idx) =>
  await new EmployeePosition({ id: idx }).fetch({
    withRelated: ["employee"],
  });

export const updateOne = async (pos, body) =>
  await pos.save({ ...body }, { patch: true });

export const deletePos = async (pos) => pos.destroy();
