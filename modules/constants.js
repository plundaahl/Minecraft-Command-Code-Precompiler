// MODULE TEMPLATE
precompiler.addModule( function(){
// ADD INSTANCE VARIABLES HERE


// PUBLIC METHODS INSIDE RETURN STATEMENT
return {

    // BASIC GETTERS
    getTitle   : function() { return "MineCode Constants"; },
    getVersion : function() { return "v0.1"; },
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

    var directives = new Array();

    function safeTrim(string) {
        if (string != null) {
            string = ("" + string).trim();
        } else {
            string = "";
        }

        return string;
    }

    // This function extracts all of the constants from the code.
    function extractConstants(string) {
        string = "\n" + string;
        patt = /\n\$.+/g;
        directives = string.match(patt);
        var otherLines = string.split(patt);
        string = "";

        for (var i = 0; i < otherLines.length; i++){
            string += otherLines[i];
        }

        return string.trim();
    }

    // APPLY DIRECTIVES
    // This function applies all of the constants.
    function applyConstants(string) {
        string = "\n" + string + "\n";
        if (directives != null) {
            for (var d = 0; d < directives.length; d++) {
                if (directives[d].search(/\n\s*\$DEFINE\s+/g) >= 0) {
                    var argString = safeTrim(directives[d].replace(/\n\s*\$DEFINE\s+/g, ""));

                    // string += "\n[" + argString + "]";

                    var target = argString.match(/\$\w+\s*/);
                    var replacement = "";

                    // string += "\n[" + target + "]";

                    if (target != null) {
                        target = safeTrim(target);

                        // string += "\n[" + target + "]";

                        replacement = argString.replace(/\$\w+\s*/g, "");
                        if (replacement != null) {
                            replacement = safeTrim(replacement);

                            // string += "\n[" + replacement + "]";

                            string = string.replace(new RegExp("\\"+target, "g"), replacement);
                        }
                    }

                }
            }
        }

        return string.trim();
    }

    code = extractConstants(code);
    code = applyConstants(code);

    } return code; }

// END OF OBJECT
}}());