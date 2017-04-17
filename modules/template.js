// MODULE TEMPLATE
precompiler.addModule( function(){
// ADD INSTANCE VARIABLES HERE


// PUBLIC METHODS INSIDE RETURN STATEMENT
return {

    // BASIC GETTERS
    getTitle   : function() { return "template"; },
    getVersion : function() { return "v0.2"; },
    getAuthor  : function() { return "Patrick Charles-Lundaahl"; },
    getDesc    : function() { return "n/a"; },
    getDomain  : function() { return "https://github.com/pclundaahl/Minecraft-Command-Code-Precompiler"; },

    // GET LESS INFO
    // Returns a string containing minimal info about the module.
    getLess    : function() {
        return this.getTitle() + " " + this.getVersion();
    },

    // GET MORE INFO
    // Returns a string with all contained info about the module.
    getMore    : function() {
        return this.getTitle() + " " + this.getVersion() + "\n"
             + "by " + this.getAuthor() + "\n"
             + this.getDesc() + "\n" + this.getDomain();
    },

    // RUN
    // This is where your precompiler script should go.
    run : function(code) {
    if (typeof code === 'string'){

    } return code; }

// END OF OBJECT
}}());