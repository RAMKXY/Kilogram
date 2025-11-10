import mysql2 from "mysql2/promise";
import configDB from "./configDB/configDB.js";

const database = await mysql2.createPool(configDB)

export default database