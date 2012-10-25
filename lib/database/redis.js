var redis = require('redis');


exports.connect = function(c)
{
    var client = redis.createClient(c.port, c.host);
    
   client.on("error", function (err) {
        console.log("Error " + err);
        return null;
    });
    
    client.on("ready", function(err){
       console.log("Connection made");
       return client;
       
    });
    
}
