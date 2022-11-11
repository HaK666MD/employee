import {
  add,
  getOne,
  getAll,
  updateOne,
  deleteOrd
} from "../services/orderEmpService.js";

export async function createEmpOrder(req, res) {
  try {
    const order = add(req.body);
    res.status(200).json(order);
  } catch (error) {
    res.status(400).send({
      success: false,
      error: `Bad Request: ${e}`,
    });
  }
}

export async function getEmpOrder(req, res) {
  try {
    const order = await getOne(req.params.id);
    res.status(200).json(order);
  } catch (error) {
    res.status(404).send({
      success: false,
      error: `Record not found with id:${req.params.id} ${error}`,
    });
  }
}

export async function getEmpOrders(req, res) {
  try {
    const orders = await getAll();
    res.status(200).json(orders);
  } catch (e) {
    res.status(404).send({
      success: false,
      error: `Failed to fetch the data: ${e}`,
    });
  }
}

export async function updateEmpOrder(req, res) {
  try {
    const order = await getOne(req.params.id);
    const upd = await updateOne(order, req.body);
    res.status(200).json(upd);
  } catch (error) {
    res.send({
      success: false,
      error,
    });
  }
}

export async function deleteEmpOrder(req, res) {
  try {
    const order = await getOne(req.params.id);
    deleteOrd(order);
    res.status(200).send({
      success: true,
      message: `Record with id: ${req.params.id} deleted successfully`,
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      error: `Record not found with id:${req.params.id} ${error}`,
    });
  }
}