import { EmpOrder } from "../models/index.js";

export const add = async (body) => await new EmpOrder({ ...body }).save();

export const getAll = async () =>
  await new EmpOrder().fetchAll({
    withRelated: ["employee", "order", "order.type", "order.position"],
  });

export const getOne = async (idx) =>
  await new EmpOrder({ id: idx }).fetch({
    withRelated: ["employee", "order", "order.type", "order.position"],
  });

export const updateOne = async (ord, body) =>
  await ord.save({ ...body }, { patch: true });

export const deleteOrd = async (ord) => ord.destroy();
