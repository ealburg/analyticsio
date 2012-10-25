var redis = require('redis');


exports.connect = function(c)
{
    var client = redis.createClient(c.port, c.host);
    
    console.log(client.server_info);
   client.on("error", function (err) {
         throw err;
    });
    
    client.on("ready", function(){
       return client;
       
    });
    
}
