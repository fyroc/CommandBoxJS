'use strict';

const { exec } = require('child_process');
const path = require('path');

let path_to_module = __dirname;

// Starts a CommandBox Instance
module.exports.start = function (cfml_path) {
    boxExecute(cfml_path, 'server start');
}

// Stops CommandBox Instance
module.exports.stop = function (cfml_path) {
    boxExecute(cfml_path, 'server stop');
}

// Custom CommandBox Commands
module.exports.execute = function (cfml_path, command) {
    boxExecute(cfml_path, command);
}

function boxExecute(cfml_path, command) {
    require('find-java-home')(function(err, home){
        if(err)return console.log(err);

        var properties_path = path.join(path_to_module, 'commandbox', 'home');
        var properites_data = `-commandbox_home="${properties_path}"`;

        var java_path = path.join(home, 'bin', 'java');
        var box_path = path.join(path_to_module, 'commandbox', 'box.jar');
        var cmd = `cd "${cfml_path}" && "${java_path}" -jar "${box_path}" ${properites_data} ${command}`;

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