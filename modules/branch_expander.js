// MODULE TEMPLATE
precompiler.addModule( function(){
// ADD INSTANCE VARIABLES HERE


// PUBLIC METHODS INSIDE RETURN STATEMENT
return {

    // BASIC GETTERS
    getTitle   : function() { return "Branch Expander"; },
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

    // ========================================================================
    // RUN
    // ========================================================================
    // This is where your precompiler script should go.
    run : function(code) {
    if (typeof code === 'string'){

    // Basic line-splitting function. This just splits on new-line characters.
    function basicSplit(string) {
        var lines = string.split("\n");
        var result = new Array();
        

        for (l = 0; l < lines.length; l++) {
            var iterations = splitAtBranch(lines[l]);

            for (i = 0; i < iterations.length; i++)
                result.push(iterations[i]);
        }

        return result;
    }

    // RECURSIVE SPLITTING FUNCTION
    /* Takes a string as input and returns an array of strings, each of which
     * contains a different version of the string. It looks for sections that
     * consist of words separated by pipe '|' characters (i.e. "you|me|him").
     * It then creates a number of new strings equal to the number of words
     * in that pattern, replacing the whole pattern with each word in turn.
     *
     * This works recursively, splitting each batch of words all the way down
     * the line.
     */
    function splitAtBranch(string) {
        var result = new Array();
        var splitStart = string.search(/\w+(\|\w+)+/);

        if (splitStart >= 0) {
            var temp = string.substring(splitStart, string.length);
            var splitEnd = splitStart + temp.search(/[^\w+(\|\w+)+]/);

            var beforeString = string.substring(0, splitStart);
            var branchString;
            var afterString = "";

            if (splitEnd > splitStart) {
                branchString = string.substring(splitStart, splitEnd);
                afterString = string.substring(splitEnd);
            } else {
                branchString = string.substring(splitStart).trim();
            }

            var branches = branchString.split('|');
            var nextSplits = splitAtBranch(afterString);

            for (var i = 0; i < branches.length; i++) {
                for (var next = 0; next < nextSplits.length; next++) {
                    result.push(beforeString + branches[i] + nextSplits[next]);
                    // writeln(result[i + next]);
                }
            }
        } else {
            result[0] = string;
        }

        return result;
    }

    // MAIN PORTION OF CODE
    var result = "";
    var iterations = basicSplit(code);

    for (var i = 0; i < iterations.length; i++) {
        result += iterations[i];
        if (i < iterations.length - 1)
            result += "\n";
    }

    code = result;


    } return code; }

// END OF OBJECT
}}());

