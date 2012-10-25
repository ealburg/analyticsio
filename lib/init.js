/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var Step = require('step');

exports.configureDatabase = function(conn, struts)
{
    
    var db_funcs = require('./database/'+conn.type);
    bootstrap(conn, db_funcs);
}

function bootstrap(c,fns, struts)
{
    try {
            var conn = fns.connect(c);
           // fns.setupTables(conn, struts);
    
    
            switch(c.type)
            {
                case 'mysql':
                    

                    break;
                case 'mongo':

                    break;
                case 'couchdb':

                    break;
                case 'redis':

                    break;
                case 'sqlite3':

                    break;
                case 'cassandra':

                    break;

            }
            console.log('Database Bootstrap Complete');
        }
     catch(e)
        {
            console.log(e);
            process.kill();
        }
}