console.log('文件路径=>' + __filename);
var r = require('./require.js');
console.log(r.testVar);
r.testFunction2('node demo');
if (module == require.main) {
	console.log('yes, main');
}