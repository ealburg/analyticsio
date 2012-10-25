/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var d = process.argv[process.argv.length -1];
var cs = require('./config/database').configure(d);

var init = require('./lib/init');

init.configureDatabase(cs);

process.kill();

