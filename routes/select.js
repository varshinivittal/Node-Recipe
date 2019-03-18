var mysql = require('mysql');


function select(cb) {
	var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "customer"
});

con.connect(function(err) {
	  if (err) {
				console.log(err);
				return cb(err);
			}

con.query("SELECT * FROM recipe", function (err, result) {
	  		if (err) 
	  			{
	  				console.log(err);
	  				con.end();
						return cb(err);
					}	
						console.log(result);
						cb(null,result);
						con.end();
				});
	  });	
}
module.exports = select;