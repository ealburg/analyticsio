/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

exports.configure = function(type)
{
    var config = {
                    'mysql':     {
                                    type: 'mysql',
                                    host: 'localhost',
                                    port: '3306',
                                    user: 'analyticsio',
                                    password: 'analyticsio',
                                    database: 'analyticsio'
                                 },
                             
                     'mongodb':  {
                                    type: 'mongodb',
                                    host: '127.0.0.1',
                                    port: 27017,
                                    user: 'user',
                                    password: 'pass',
                                    database: 'analyticsio'
                         
                                 },
                                 
                     'cassandra':  {
                                    type: 'cassandra',
                                    host: 'localhost',
                                    port: '3360',
                                    user: 'user',
                                    password: 'pass',
                                    database: 'analyticsio'
                         
                                 }, 
                                 
                     'redis':  {
                                    type: 'redis',
                                    host: '127.0.0.1',
                                    port: 6379,
                                    user: 'user',
                                    password: 'pass',
                                    database: 'analyticsio'
                         
                                 },
                     'couchdb':  {
                                    type: 'couchdb',
                                    host: 'localhost',
                                    port: '3360',
                                    user: 'user',
                                    password: 'pass',
                                    database: 'analyticsio'
                         
                                 },
                                 
                     'sqlite3':  {
                                    type: 'sqlite3',
                                    host: 'localhost',
                                    port: '3360',
                                    user: 'user',
                                    password: 'pass',
                                    database: 'analyticsio'
                         
                                 }
        
                }
                
    return (typeof config[type] == 'undefined')? null: config[type];
    
    
    
}

