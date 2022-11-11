export function seed(knex, Promise) {
  return knex("order")
    .del()
    .then(() => {
      return knex("order").insert([
        {
          id: 1,
          name: "N65",
          order_type_id: "1",
          employee_position_id: "1"
        },
        {
          id: 2,
          name: "N25",
          order_type_id: "1",
          employee_position_id: "3"
        },
        {
          id: 3,
          name: "N50",
          order_type_id: "1",
          employee_position_id: "2"
        },
      ]);
    });
}
