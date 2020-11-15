import * as mysql from "mysql"
import mysqlConfig from '../config/mysql.config'

const sql = mysql.createConnection(mysqlConfig)
sql.connect()
sql.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('The solution is: ', rows[0].solution);
});

sql.end();
