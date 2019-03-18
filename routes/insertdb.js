var mysql=require('mysql');

function insertdb(cb, req) {
	var con=mysql.createConnection({
		host:"localhost",
		user:"root",
		password:"root",
		database:"customer",
	});
	con.connect(function(err) {
			if (err) {
			console.log(err);
			return cb(err);
		}

		var firstName=req.body.firstName;
		var lastName=req.body.lastName;
		var email=req.body.email;
		var password=req.body.password;
		var address=req.body.address;
		var city=req.body.city;
		var state=req.body.state;
		var zip=req.body.zip;

		var query = `INSERT INTO customers (FirstName, LastName, Email, Password, Address, City, State, Zip) VALUES (?, ?, ?, ?, ?, ?, ?, ? )`;

		console.log("Inserted");
		con.query( query, [firstName, lastName, email, password, address, city, state, zip], 
			function (err, result) {
				if (err) {
					console.log('error:', err);
					con.end();
				 	return cb(err); 
				}
					cb(null, result);
					con.end();
			});
	});
}


module.exports=insertdb;