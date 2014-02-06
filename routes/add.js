var data = require("../data.json");

exports.addFriend = function(req, res) {    
	console.log(data);
	res.render('add', data);
	var name = req.query.name;
	var description = req.query.description;
	
	var newFriend = new Object();
	newFriend.name = name;
	newFriend.description = description;
	newFriend.imageURL = "http://lorempixel.com/400/400/people";
	console.log(newFriend);

	data["friends"].push(newFriend);
};