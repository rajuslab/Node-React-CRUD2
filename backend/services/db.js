const mysql = require('mysql2/promise'); //import mysql 2 file
const config = require('../config'); //import config db file

async function query(sql, params) {
  const connection = await mysql.createConnection(config.db);
  const [result, ] = await connection.execute(sql, params);

  return result;
}

module.exports = {
  query
}
