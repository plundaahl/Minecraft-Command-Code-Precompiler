function isFunction(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
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
            var result = "Active Modules: " + modules.length + "\n";

            // Loop through modules and add info about each to the output.
            for (i = 0; i < modules.length; i++){
                var mod = modules[i];
                result += "\n   "
                        + mod.getTitle() + " "
                        + mod.getVersion() + "\n";
            }

            return result;
        }
    };
}();