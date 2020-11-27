var estilo = document.getElementById('pagestyle')

function changeHREF(){
    if(estilo.href == "https://code.getmdl.io/1.3.0/material.purple-cyan.min.css"){
        estilo.href = "https://code.getmdl.io/1.3.0/material.blue-light_blue.min.css"
    } else{
        estilo.href = 'https://code.getmdl.io/1.3.0/material.purple-cyan.min.css'
    }
}