import { OrderType } from "../models/index.js";

export const add = async (body) => await new OrderType({ ...body }).save();

export const getAll = async () => await new OrderType().fetchAll();

export const getOne = async (idx) => await new OrderType({ id: idx }).fetch();

export const updateOne = async (type, body) => await type.save({ ...body }, { patch: true });

export const deleteType = async (type) => type.destroy();
