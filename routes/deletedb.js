var mysql = require('mysql');

function deletedb(cb) {
	var con = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "root",
		database: "customer"
	});
	con.connect(function(err) {
		if (err) cb(err);
		console.log("connected");
		con.query("DELETE FROM customers WHERE name = 'Varshini'", function (err, result, fields) {
			if (err) cb(err);
			console.log(result);
			cb(null,result);
		});
	});
}
module.exports= deletedb;