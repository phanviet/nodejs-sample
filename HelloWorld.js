var test = require('unit.js');
var str = 'Hello, world updated from develop!';

test.string(str).startsWith('Hello');
if (test.string(str).startsWith('Hello')) {
  console.log('Passed');
}
