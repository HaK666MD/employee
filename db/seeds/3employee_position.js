export function seed(knex, Promise) {
  return knex("employee_position")
    .del()
    .then(() => {
      return knex("employee_position").insert([
        {
          id: 1,
          employee_id: 1,
          position: "Web",
          salary: "1000",
          start_date: "20220303",
        },
        {
          id: 2,
          employee_id: 2,
          position: "Mechanic",
          salary: "1500",
          start_date: "20220303",
        },
        {
          id: 3,
          employee_id: 3,
          position: "QA",
          salary: "2500",
          start_date: "20220303",
        },
      ]);
    });
}
