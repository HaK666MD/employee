import {
  add,
  deletePos,
  getAll,
  getOne,
  updateOne,
} from "../services/positionService.js";

export async function createPosition(req, res) {
  try {
    const position = add(req.body);
    res.status(200).json(position);
  } catch (error) {
    res.status(400).send({
      success: false,
      error: `Bad Request: ${e}`,
    });
  }
}

export async function getPosition(req, res) {
  try {
    const position = await getOne(req.params.id);
    res.status(200).json(position);
  } catch (error) {
    res.status(404).send({
      success: false,
      error: `Record not found with id:${req.params.id} ${error}`,
    });
  }
}

export async function getPositions(req, res) {
  try {
    const positions = await getAll();
    res.status(200).json(positions);
  } catch (e) {
    res.status(404).send({
      success: false,
      error: `Failed to fetch the data: ${e}`,
    });
  }
}

// Update
export async function updatePosition(req, res) {
  try {
    const position = await getOne(req.params.id);
    const upd = await updateOne(position, req.body);
    res.status(200).json(upd);
  } catch (error) {
    res.send({
      success: false,
      error,
    });
  }
}

//Delete
export async function deletePosition(req, res) {
  try {
    const position = await getOne(req.params.id);
    deletePos(position);
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