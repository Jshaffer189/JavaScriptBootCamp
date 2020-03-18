#!/usr/bin/env node

const chokidar = require('chokidar');

chokidar.watch('.').on('all', () => {});
