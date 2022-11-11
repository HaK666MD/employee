import { Employee } from "../models/index.js";

export const add = async (body) => await new Employee({ ...body }).save();

export const getAll = async () =>
  await new Employee().fetchAll({
    withRelated: ["order", "order.type", "order.position"],
  });

export const getOne = async (idx) =>
  await new Employee({ id: idx }).fetch({
    withRelated: ["order", "order.type", "order.position"],
  });

export const updateOne = async (pers, body) =>
  await pers.save({ ...body }, { patch: true });

export const deleteEmp = async (emp) => emp.destroy();
