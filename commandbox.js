'use strict';

const { exec } = require('child_process');

let isWin = process.platform === "win32";
let pathToModule = __dirname;

// Starts a CommandBox Instance
module.exports.start = function (path) {
    require('find-java-home')(function(err, home){
        if(err)return console.log(err);

        if (isWin) {
            var java_path = home + '\\bin\\java';
            var cfml_path = path;
            var box_path = pathToModule + '\\jars\\box.jar';
        } else {
            var java_path = home + '/bin/java';
            var cfml_path = path;
            var box_path = pathToModule + '/jars/box.jar';
        }

        var cmd = `cd "${cfml_path}" && "${java_path}" -jar "${box_path}" server start`;

        execute(cmd, (output) => {
            console.log(output)
        })
    });
}

// Stops CommandBox Instance
module.exports.stop = function (path) {
    require('find-java-home')(function(err, home){
        if(err)return console.log(err);

        if (isWin) {
            var java_path = home + '\\bin\\java';
            var cfml_path = path;
            var box_path = pathToModule + '\\jars\\box.jar';
        } else {
            var java_path = home + '/bin/java';
            var cfml_path = path;
            var box_path = pathToModule + '/jars/box.jar';
        }

        var cmd = `cd "${cfml_path}" && "${java_path}" -jar "${box_path}" server stop`;

        execute(cmd, (output) => {
            console.log(output)
        })
    });
}

function execute(command, callback) {
    exec(command, (error, stdout, stderr) => { 
        if( error ) callback(error)
        if( stderr ) callback(stderr)
        if( stdout ) callback(stdout)
    })
}