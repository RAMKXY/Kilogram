import mysql2 from "mysql2/promise";
import dbConfig from "./configDB/configDB.js";

const database = mysql2.createPool(dbConfig)

export default database