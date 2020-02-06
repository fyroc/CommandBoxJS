const download = require('download-file')
const path = require('path');

let jar_location = "https://s3.amazonaws.com/downloads.ortussolutions.com/ortussolutions/commandbox/5.0.0-RC.1/box.jar";
let path_to_directory = path.join(__dirname, 'commandbox');

var options = {
    directory: path_to_directory
}

console.log("Please wait while we download the CommandBox JAR.")

download(jar_location, options, function(err){
    if (err) throw err
    console.log("Download of box.jar completed!")
})