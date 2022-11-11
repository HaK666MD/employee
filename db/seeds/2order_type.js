export function seed(knex, Promise) {
  return knex("order_type")
    .del()
    .then(() => {
      return knex("order_type").insert([
        {
          id: 1,
          name: "Ընդունում",
        },
        {
          id: 2,
          name: "Ազատում",
        }
      ]);
    });
}
