import {
  add,
  deleteEmp,
  getAll,
  getOne,
  updateOne,
} from "../services/employeeService.js";

export function addEmployee(req, res) {
  try {
    const employee = add(req.body);
    res.status(200).json(employee);
  } catch (error) {
    res.status(400).send({
      success: false,
      error: `Bad Request: ${e}`,
    });
  }
}

export async function getEmployees(req, res) {
  try {
    const employees = await getAll();
    res.status(200).json(employees);
  } catch (e) {
    res.status(404).send({
      success: false,
      error: `Failed to fetch the data: ${e}`,
    });
  }
}

export async function getEmployee(req, res) {
  try {
    const person = await getOne(req.params.id);
    res.status(200).json(person);
  } catch (error) {
    res.status(404).send({
      success: false,
      error: `Record not found with id:${req.params.id} ${error}`,
    });
  }
}

// Update
export async function updateEmployee(req, res) {
  try {
    const pers = await getOne(req.params.id);
    const upd = await updateOne(pers, req.body);
    res.status(200).json(upd);
  } catch (error) {
    res.send({
      success: false,
      error,
    });
  }
}

//Delete
export async function deleteEmployee(req, res) {
  try {
    const pers = await getOne(req.params.id);
    deleteEmp(pers);
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
