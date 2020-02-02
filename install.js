const download = require('download-file')

let jar_location = "https://s3.amazonaws.com/downloads.ortussolutions.com/ortussolutions/commandbox/4.9.0-alpha/box.jar";
let pathToDirectory = __dirname + '/jars';

var options = {
    directory: pathToDirectory
}
console.log("Please wait while we download the CommandBox JAR.")

download(jar_location, options, function(err){
    if (err) throw err
    console.log("Download of box.jar completed!")
})