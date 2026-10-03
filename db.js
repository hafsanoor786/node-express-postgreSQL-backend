import { Pool } from "pg";

const pool = new Pool({
    user : 'postgres',
    host : "localhost",
    database : "crud_db",
    password : "366330",
    port : 5432
})

export default pool