
console.log("Ciao");


const fs = require("fs"); 
fs.readFile("gestori_da_ordinare.json", function(err, data) {       
    if (err) throw err;  
    const users = JSON.parse(data);      
    console.log(users);  
}); 



