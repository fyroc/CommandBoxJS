'use strict';

const { exec } = require('child_process');
const path = require('path');

let pathToModule = __dirname;

// Starts a CommandBox Instance
module.exports.start = function (cfml_path) {
    require('find-java-home')(function(err, home){
        if(err)return console.log(err);

        var java_path = path.join(home, 'bin', 'java');
        var box_path = path.join(pathToModule, 'jars', 'box.jar');

        var cmd = `cd "${cfml_path}" && "${java_path}" -jar "${box_path}" server start`;

        execute(cmd, (output) => {
            console.log(output)
        })
    });
}

// Stops CommandBox Instance
module.exports.stop = function (cfml_path) {
    require('find-java-home')(function(err, home){
        if(err)return console.log(err);

        var java_path = path.join(home, 'bin', 'java');
        var box_path = path.join(pathToModule, 'jars', 'box.jar');

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