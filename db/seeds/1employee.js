export function seed(knex, Promise) {
  // Deletes ALL existing entries
  return knex("employee")
    .del()
    .then(() => {
      // Inserts seed entries
      return knex("employee").insert([
        {
          id: 1,
          firstName: "Hakob",
          lastName: "Harutyunyan",
          middleName: "Ashot",
          age: 31,
          sex: "m",
        },
        {
          id: 2,
          firstName: "Karen",
          lastName: "Gevorgyan",
          middleName: "Gevorg",
          age: 35,
          sex: "m",
        },
        {
          id: 3,
          firstName: "Angel",
          lastName: "Sargsyan",
          middleName: "Hayk",
          age: 25,
          sex: "f",
        },
      ]);
    });
}
