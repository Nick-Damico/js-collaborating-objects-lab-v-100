const dir = require('node-dir');
const path = require('path');

class MP3Importer {
  constructor(filePath) {
    this.path = filePath;
    this.files = [];

    var files = dir.files(__dirname + '/' + this.path, {sync:true});
    files.forEach((file) => {
      let pattern = path.join(__dirname, this.path);
      this.files.push(file.replace(pattern, ''));
    })
  }
}

export default MP3Importer;
