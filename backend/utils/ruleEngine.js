const { Engine } = require('json-rules-engine');

let R = null;

module.exports = () => {
  if(R) return R;
  R = new Engine();
  return R;
};
