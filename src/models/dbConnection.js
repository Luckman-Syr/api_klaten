const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'data_disabilitas_kab_klaten',
  password: 'alvaro123',
  port: 5432,
})

pool.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

exports.pool = pool;

