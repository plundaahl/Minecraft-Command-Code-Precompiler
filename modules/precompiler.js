function isFunction(functionToCheck) {
    var getType = {};
    return functionToCheck && 
           getType.toString.call(functionToCheck) === '[object Function]';
}

// SET UP MODULES CONTAINER
var precompiler = function (){
    var modules = new Array();

    return {
        // ADD MODULE
        // This method is used to add new modules to the list.
        addModule : function (module) {
            if (   isFunction(module.getTitle)
                && isFunction(module.getVersion)
                && isFunction(module.getAuthor)
                && isFunction(module.getDesc)
                && isFunction(module.getDomain)
                && isFunction(module.getLess)
                && isFunction(module.getMore)
                && isFunction(module.run))
            {
                // writeln("Added");
                modules.push(module);
            } else {
                // writeln("Failed to add");
            }
        },

        // DEBUG TOOL.
        // Returns a string containing details about all active modules.
        listModules : function () {
            var result = "Active Modules: " + modules.length + "\n\n";

            // Loop through modules and add info about each to the output.
            for (i = 0; i < modules.length; i++){
                result += "   " + modules[i].getLess();
            }

            return result;
        },

        // RUN PRECOMPILER
        run : function (code) {
            var compiled = "";

            // Loop through all active modules and attempt to run each.
            for (i = 0; i < modules.length; i++){
                try {
                    var pass = modules[i].run(code);

                    if (typeof pass === 'string') {
                        compiled = modules[i].run(code);
                    } else {
                        var message = modules[i].getTitle() + " "
                                    + modules[i].getVersion()
                                    + " returned invalid type. Skipping";
                        throw message;
                    }

                } catch (err) {
                    writeln("ERROR: " + err);
                }
            }

            return compiled;
        }
    };
}();

// RUN FUNCTION
function precompile() {
    document.getElementById("output").innerHTML = 
            precompiler.run(document.getElementById("input").value);
}