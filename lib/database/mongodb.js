/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var Db = require('mongodb').Db,
  Connection = require('mongodb').Connection,
  Server = require('mongodb').Server,
  mongo = require('mongodb');

exports.connect = function(c)
{
    console.log(c.host);
    console.log(c.port);
    var db = new Db(c.database, new Server(c.host, c.port), {safe: true});
           
    db.open(function(err, db) {
                
                if (err) throw err;
                if (!err) return db;
                      
              });
    
}
