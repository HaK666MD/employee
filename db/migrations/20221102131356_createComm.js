export function up(knex) {
  return knex.schema
    .createTable("employee", function (t) {
      t.increments("id").unsigned().primary();
      t.string("firstName").notNull(); 
      t.string("lastName").notNull();
      t.string("middleName").notNull();
      t.integer("age").notNull();
      t.enum("sex", ["f", "m", "u"]).notNull();
    })
    .createTable("order_type", function (t) {
      t.increments("id").unsigned().primary();
      t.string("name").notNull().unique(); 
    })
    .createTable("employee_position", function (t) {
      t.increments("id").unsigned().primary();
      t.integer("employee_id").unsigned().notNull().references("employee.id");
      t.string("position").notNull();
      t.decimal("salary", 14, 2).notNull();
      t.date("start_date").notNull();
      t.date("end_date").defaultTo(null)
    })
    .createTable("order", function (t) {
      t.increments("id").unsigned().primary();
      t.string("name").notNull().unique(); 
      t.integer("order_type_id").unsigned().notNull().references("order_type.id");
      t.integer("employee_position_id").unsigned().notNull().references("employee_position.id");
      t.timestamp('created_at').defaultTo(knex.fn.now());
    })
    .createTable("employee_order", function (t) {
      t.increments("id").unsigned().primary();
      t.integer("employee_id").unsigned().notNull().references("employee.id");
      t.integer("order_id").unsigned().notNull().references("order.id");
    })
    
}

export function down(knex) {
  return knex.schema
    .dropTable("employee")
    .dropTable("order")
    .dropTable("order_type")
    .dropTable("employee_order")
    .dropTable("employee_position")
}
