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
            var result = "MINECRAFT COMMAND PRECOMPILER\n"
                       + "Modules loaded: " + modules.length + "\n";

            // Loop through modules and add info about each to the output.
            for (i = 0; i < modules.length; i++){
                result += "   " + modules[i].getLess() + "\n";
            }

            return result;
        },

        // RUN PRECOMPILER
        run : function (code) {
            var errors = 0;
            var compiled = code;

            writeln("Precompile Started.")

            // Loop through all active modules and attempt to run each.
            for (i = 0; i < modules.length; i++){
                try {
                    var pass = modules[i].run(compiled);

                    if (typeof pass === 'string') {
                        compiled = pass;
                        write("   ");
                        writeln(modules[i].getLess() + " ran successfully.");
                    } else {
                        throw modules[i].getLess()
                              + " returned invalid type. Skipping";
                    }

                } catch (err) {
                    errors++;
                    write("   ");
                    writeln("ERROR: " + err);
                }
            }

            // PRECOMPILE SUMMARY MESSAGE
            writeln("Precompile Finished.");
            writeln(errors + " errors.")
            writeln();
            return compiled;
        }
    };
}();

// RUN FUNCTION
function precompile() {
    document.getElementById("output").innerHTML = 
            precompiler.run(document.getElementById("input").value);
}