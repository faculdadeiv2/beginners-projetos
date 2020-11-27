document.querySelector('.date').innerHTML = new Date().toLocaleString()

var image = document.querySelector('#ic')

function changeImg(){
    if(image.src.match('https://fatosdesconhecidos.com.br/wp-content/uploads/2019/11/naruto-4.jpg')){
        image.src = 'https://www.pixel4k.com/wp-content/uploads/2018/11/naruto-uzumaki-4k_1541975094.jpg'
    }else {
        image.src = 'https://fatosdesconhecidos.com.br/wp-content/uploads/2019/11/naruto-4.jpg'
    }
}

var texto = document.getElementById('title')

function changeText(){
    if(texto.innerHTML ==  'Uzumaki Naruto'){
        texto.innerHTML =  'O ninja número 1, imperativo e cabeça oca'
        texto.style.fontSize = '4.5em'
    } else{
        texto.innerHTML = 'Uzumaki Naruto'
        texto.style.fontSize = '10em'
    }
}