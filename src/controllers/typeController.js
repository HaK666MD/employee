import {
  add,
  getAll,
  getOne,
  updateOne,
  deleteType,
} from "../services/typeService.js";

export async function addType(req, res) {
  try {
    const types = await getAll();
    const exists = types.toJSON().find((type) => type.name === req.body.name);
    if (exists) {
      res.status(401).send({
        success: false,
        error: `Type with name ${no.name} already exists`,
      });
    } else {
      const type = add(req.body);
      res.status(200).json(type);
    }
  } catch (e) {
    res.status(400).send({
      success: false,
      error: `Bad Request: ${e}`,
    });
  }
}

export async function getType(req, res) {
  try {
    const type = await getOne(req.params.id);
    res.status(200).json(type);
  } catch (error) {
    res.status(404).send({
      success: false,
      error: `Record not found with id:${req.params.id} ${error}`,
    });
  }
}

export async function getTypes(req, res) {
  try {
    const types = await getAll();
    res.status(200).json(types);
  } catch (e) {
    res.status(404).send({
      success: false,
      error: `Failed to fetch the data: ${e}`,
    });
  }
}

export async function updateType(req, res) {
  try {
    const type = await getOne(req.params.id);
    const upd = await updateOne(type, req.body);
    res.status(200).json(upd);
  } catch (error) {
    res.send({
      success: false,
      error,
    });
  }
}

export async function deleteOrderType(req, res) {
  try {
    const type = await getOne(req.params.id);
    deleteType(type);
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
