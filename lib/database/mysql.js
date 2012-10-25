/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var mysql = require('mysql');

exports.connect = function(c)
{
    var connection = mysql.createConnection(c);
    connection.connect(function(err){
        if (err) throw err;
        if (!err) return connection;
    });
}

exports.setupTables = function(con, mode)
{
    
}