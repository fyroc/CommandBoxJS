# CommandBoxJS
NPM Package that allows you to run CommandBox 

# Installation
`npm install -s commandboxjs`

# Usage

## Start CommandBox

```
const box = require('commandboxjs');

let cfml_path = 'path/to/coldfusion/files';

box.start(cfml_path);
```

## Stop CommandBox

```
const box = require('commandboxjs');

let cfml_path = 'path/to/coldfusion/files';

box.stop(cfml_path);
```

## Configuration

To pass commands into CommandBox just create a `server.json` in the directory where you CFML lives.

https://commandbox.ortusbooks.com/embedded-server/server.json

## Notes & Legal

CommandBox is created by Ortus Solutions to quickly spin up ColdFusion servers. This package simply allows you to start and stop a server using NodeJS. This is ideal for Electron to be able to package your CFML files and manage them with Electron. I have no affilation with Ortus Solutions and you must follow their license and guidelines.

https://commandbox.ortusbooks.com

## Electron Example

https://github.com/fyroc/cfml-electron


