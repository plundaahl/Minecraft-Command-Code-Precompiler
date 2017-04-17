// MODULE TEMPLATE
precompiler.addModule( function(){
// ADD INSTANCE VARIABLES HERE


// PUBLIC METHODS INSIDE RETURN STATEMENT
return {

	getTitle   : function() { return "template"; },
	getVersion : function() { return "v0.2"; },
	getAuthor  : function() { return "Patrick Charles-Lundaahl"; },
	getDesc    : function() { return "n/a"; },
	getDomain  : function() { return "http://www.yourwebsite.com"; },
	run        : function(code) {
	if (typeof code === 'string'){

	}
	return code;
}

// END OF OBJECT
}}());