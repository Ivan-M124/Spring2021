{
    "name": "audio_recorder",
    "version": "1.0.0",
    "description": "records audio",
    "main": "index.js",
    "dependencies": {
      "bluebird": "^3.7.2",
      "node-audiorecorder": "^2.2.0",
      "save": "^2.4.0"
    },
    "devDependencies": {},
    "scripts": {
      "test": "test"
    },
    "keywords": [
      "audio"
    ],
    "author": "Ivan Mayen",
    "license": "ISC"
  }

  const AudioRecorder = require('node-audiorecorder');
const xT = require('xT');

const input = new AudioRecorder.Input();

const writable = xT.createWriteStream(output.wav);
input.pipe(writable);