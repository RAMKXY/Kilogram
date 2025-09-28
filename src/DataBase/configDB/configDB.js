import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: resolve(__dirname, "../../../.env") });

const dbConfig = {
    host: process.env.HOST_DATABASE,
    user: process.env.USER_DATABASE,
    password: process.env.USER_PASSWORD_DATABASE,
    database: process.env.DATABASE,
    port: process.env.PORT_DATABASE
};

export default dbConfig;
