// Local (client-only) collection
Game = new Mongo.Collection(null);
Errors = new Mongo.Collection(null);

// Function for error message
throwError = function(message) {
	Errors.insert({
		message: message
	});
};
