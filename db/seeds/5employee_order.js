export function seed(knex, Promise) {
    // Deletes ALL existing entries
    return knex("employee_order")
      .del()
      .then(() => {
        // Inserts seed entries
        return knex("employee_order").insert([
          {
            employee_id: 1,
            order_id: 3,
          },
          {
            employee_id: 2,
            order_id: 1,
          },
          {
            employee_id: 3,
            order_id: 2,
          },
        ]);
      });
  }
  