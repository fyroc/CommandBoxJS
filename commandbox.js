'use strict';

const { exec } = require('child_process');
const path = require('path');

let path_to_module = __dirname;

// CommandBox Command
module.exports.execute = function (cfml_path, command, properties_path='') {
    boxExecute(cfml_path, command, properties_path);
}

function boxExecute(cfml_path, command, properties_path='') {
    require('find-java-home')(function(err, home){
        if(err)return console.log(err);
        
        var properites_data = '';
        if (properties_path) {
            properites_data = `-commandbox_home="${properties_path}"`;
        }

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
