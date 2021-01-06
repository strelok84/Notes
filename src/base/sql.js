const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "database-1.cyvkan0ovplr.eu-west-3.rds.amazonaws.com",
    user: "streloc84",
    database: "streloc84",
    password: "str84loc"
});


module.exports.connect = connection.connect(function (err) {
    if (err) {
        return console.error("Ошибка: " + err.message);
    }
    else {
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});

let login = "strelok84"
let date = new Date()
let text=""



let sqlString="ALTER TABLE Notes DROP COLUMN time"

module.exports.sqlString=sqlString;
module.exports.query = function(){connection.query(sqlString, function (err, results,fields) {
    if (err) console.log(err);
    else console.log(results);
})
}
 /* connection.connect(function(err){
   if (err) {
     return console.error("Ошибка: " + err.message);
   }
   else{
     console.log("Подключение к серверу MySQL успешно установлено");
   }
}); */

/* const user = ["Tom", 29];
const sql = "INSERT INTO tom(user, age) VALUES(?, ?)";

connection.query(sql, user, function(err, results) {
    if(err) console.log(err);
    else console.log("Данные добавлены");
});

connection.query("SELECT * FROM tom",
  function(err, results, fields) {
    console.log(err);
    console.log(results); // собственно данные
    console.log(fields); // мета-данные полей
});

connection.end(); */

