#!/bin/bash

mkdir -p node_modules/babel-preset-react-app/node_modules/@babel;
cp -R node_modules/@babel/runtime node_modules/babel-preset-react-app/node_modules/@babel;

cat > node_modules/react-epic-spinners/index.js << ENDOFFILE
module.exports = require('./dist/react-epic-spinners.cjs');
ENDOFFILE
