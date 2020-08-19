
console.log("Ciao");


const fs = require("fs"); 
fs.readFile("gestori_da_ordinare.json", function(err, data) {       
    if (err) throw err;  
    const gestori = JSON.parse(data); 
    var x=0;
    gestori.forEach(element => {
       
        if(element.aree!=null){
            console.log(element.aree.nome + " " + element.gestore.id.id + " " + element.gestore.nome);
            
        }
        
    });

    
      
}); 




