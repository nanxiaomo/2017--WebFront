var color = require('colors');

exports.printMsg = function(color,msg) {
	if (!color) color = 'red'
    console.log(msg[color]);
}