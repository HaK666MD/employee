import bookshelf from "../../db/bookshelf.js";

export const Employee = bookshelf.model("Employee", {
  tableName: "employee",
  order: function () {
    return this.belongsToMany(Order);
  },
});

export const OrderType = bookshelf.model("OrderType", {
  tableName: "order_type",
});

export const EmployeePosition = bookshelf.model("EmployeePosition", {
  tableName: "employee_position",
  employee: function () {
    return this.belongsTo(Employee);
  },
});

export const Order = bookshelf.model("Order", {
  tableName: "order",
  employee: function () {
    return this.belongsTo(Employee);
  },
  type: function () {
    return this.belongsTo(OrderType);
  },
  position: function () {
    return this.belongsTo(EmployeePosition);
  },
});

export const EmpOrder = bookshelf.model("EmpOrder", {
  tableName: "employee_order",
  employee: function () {
    return this.belongsTo(Employee);
  },
  order: function () {
    return this.belongsTo(Order);
  },
});
