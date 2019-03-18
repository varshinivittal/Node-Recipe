var mysql = require('mysql');


function selectdb(cb, req) {
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

	var Email=req.body.Email;
	var Password=req.body.Password;
	console.log(Email);
	console.log(Password);

	   		con.query('SELECT * FROM customers WHERE Email = ? and Password = ?',[Email,Password], function (err, result) {
	  		if (err) 
	  			{
	  				console.log(err);
	  				con.end();
						return cb(err);
					}	
					console.log(`length${result.length}`);
					if(result.length > 0){
						console.log('user ex')
						cb(null,result);
					} else {
						cb('error',null);
'error'					}
				});
	  });	
}

module.exports = selectdb;