import { Order } from "../models/index.js";

export const add = async (body) => await new Order({ ...body }).save();

export const getAll = async () =>
  await new Order().fetchAll({
    withRelated: ["employee", "type", "position", "position.employee"],
  });

export const getOne = async (idx) =>
  await new Order({ id: idx }).fetch({
    withRelated: ["employee", "type", "position", "position.employee"],
  });

export const updateOne = async (ord, body) =>
  await ord.save({ ...body }, { patch: true });

export const deleteOrd = async (ord) => ord.destroy();
