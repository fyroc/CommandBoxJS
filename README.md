# CommandBoxJS
NPM Package that allows you to run CommandBox 

# Installation

Please note, Java is required to be installed on your device for CommandBox to work.

`npm install -s commandboxjs`

# Usage

## Start CommandBox

```
const box = require('commandboxjs');

let cfml_path = 'path/to/coldfusion/files';

box.execute(cfml_path, 'server start');
```

## Stop CommandBox

```
const box = require('commandboxjs');

let cfml_path = 'path/to/coldfusion/files';

box.execute(cfml_path, 'server stop');
```

## CommandBox Execute
This allows you to execute any other command needed. Do not include `box` at the beginning, the command does it for you.

```
const box = require('commandboxjs');

let cfml_path = 'path/to/coldfusion/files';

box.execute(cfml_path, 'server restart');
```

## Optional properties_path
This allows you to define where you want your engine files to live. Leave it blank for the commandbox default location or define your own.

```
const box = require('commandboxjs');

let cfml_path = 'path/to/coldfusion/files';
var properties_path = 'path/to/coldfusion/engine';

box.execute(cfml_path, 'server start', properties_path);
```

## Configuration

To pass commands into CommandBox just create a `server.json` in the directory where your CFML lives.

https://commandbox.ortusbooks.com/embedded-server/server.json

## Notes & Legal

CommandBox is created by Ortus Solutions to quickly spin up ColdFusion servers. This package simply allows you to start and stop a server using NodeJS. This is ideal for Electron to be able to package your CFML files and manage them with Electron. I have no affilation with Ortus Solutions and you must follow their license and guidelines.

https://commandbox.ortusbooks.com

## Electron Example

https://github.com/fyroc/cfml-electron


