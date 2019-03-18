var mysql=require('mysql');

function insert(cb, req) {
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

		var Title=req.body.Title;
		var Ingredients=req.body.Ingredients;
		var Instructions=req.body.Instructions;
		
		var query = `INSERT INTO recipe (Title, Ingredients, Instructions) VALUES (?, ?, ?)`;

		console.log("Inserted");
		con.query( query, [Title, Ingredients, Instructions], 
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


module.exports=insert;