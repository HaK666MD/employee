import knex from "knex";
import bookshelf from "bookshelf";

import config from "./knexfile.js";
export default bookshelf(knex(config));
