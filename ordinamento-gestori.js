
console.log("Ciao");


const fs = require("fs"); 
fs.readFile("gestori_da_ordinare.json", function(err, data) {       
    if (err) throw err;  
    const gestori = JSON.parse(data); 
    const sortedArray=gestori.sort(function(a,b){
        if(a.aree!=null && b.aree!=null){
            if(a.aree.id == b.aree.id){
                return 1;
            }else{
                if(a.aree.nome>b.aree.nome){
                    return +1;
                }else{
                    return -1;
                }               
            }
        
        }else{
            return 1;
        }
    });

    sortedArray.forEach(element => {
       
        if(element.aree!=null){
            
            console.log(element.aree.nome + " " + element.gestore.id.idUI + " " + element.gestore.id.id + " " + element.gestore.nome);           
        }      
    });

    


    
  




    
      
}); 




