function apenasNumeros() {
              
    var serie = document.getElementById("ns")
       if(serie.value.length == 3){
           serie.value += "."
       }
 }

 var produtos = JSON.parse(localStorage.getItem("produtos"));

 if(produtos == null){
       produtos = [];
 }

 function salvar(){
         produtos.push({
         'ns': document.getElementById('ns').value,
         'name' : document.getElementById('name').value,
         'equip' : document.getElementById('equip').value,
         'carac' : document.getElementById('carac').value
     });

     const json_produtos = JSON.stringify(produtos);

     localStorage.setItem("produtos", json_produtos);
     }