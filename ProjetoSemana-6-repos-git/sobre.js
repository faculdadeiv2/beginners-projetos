let xhr = new XMLHttpRequest()

let bloco = document.querySelector(".mdl-card")

var repositorioJson = localStorage.getItem("repositorio")

if(repositorioJson == null){
    repositorioJson = []
}

var repositorio = JSON.parse(repositorioJson)

let url = "https://api.github.com/repos/Zeite-endless/" + repositorio[0].nome;

xhr.open('GET', url)


xhr.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {
        let dadosJSONText = xhr.responseText
        let dadosJSONObj = JSON.parse(dadosJSONText)
            
        bloco.innerHTML += 
        
            `<h1 class="mdl-card__title>Username:`+dadosJSONObj.owner.login+`</h1>
            <p class="mdl-card__supporting-text">Id do Repositório: `+dadosJSONObj.id+`</p>
            <p class="mdl-card__media"><img src="images/otavio.jpg"></img></p>
            <a class="mdl-card__supporting-text" href="`+dadosJSONObj.following_url+`">Link para seguidores</a>
            <p class="mdl-card__supporting-text">Descrição do Repositório: `+dadosJSONObj.description+`</p>
            <a class="mdl-card__supporting-text" href="`+dadosJSONObj.collaborators_url+`">Link para Colaboradores</a>
            <a class="mdl-card__supporting-text" href="`+dadosJSONObj.branches_url+`">Link para Branchs</a>
            <a class="mdl-card__supporting-text" href="`+dadosJSONObj.commits_url+`">Link para Branchs</a>
            <p class="mdl-card__supporting-text">Linguagem Predominante: `+dadosJSONObj.language+`</p>
            <iframe class="mdl-card__supporting-text scroll" style="height:220px"src="images/`+dadosJSONObj.language+`.txt"></iframe>
            <img src="images/`+dadosJSONObj.language +`.png"></img>`
            
        
        
        
        
           /*  "<div id=\"divisao\" align=\"center\"><p>" + "Username: " + dadosJSONObj.owner.login + "</p><br>" +
            "<p>" + "Id do Repositório: " + dadosJSONObj.id + "</p><br>" +
            "<p><img id=\"imagem\" align=\"center\" src=\"images/otavio.jpg\"></img></p><br>" +
            "<p id=\"seguidores\"><a href=\"('" + dadosJSONObj.following_url + "')\">Link Para Folllowers" + "</a></p>" +
            "<p>" + "Descrição do Repositório: " + dadosJSONObj.description + "</p><br></div>" +
            "<div id=\"link\" align=\"center\"><p><a href=\"('" + dadosJSONObj.collaborators_url + "')\">Link Para Colaboradores" + "</a></p>" +
            "<p><a href=\"('" + dadosJSONObj.branches_url + "')\">Link Para Branches" + "</a></p>" +
            "<p><a href=\"('" + dadosJSONObj.commits_url + "')\">Link Para Commits" + "</a></p></div>" +
            "<div id=\"linguagem\" align=\"center\"><p id=\"titulo\">" + "Linguagem Predominante: " + dadosJSONObj.language + "<p><br>" +
            "<iframe  class=\"texta\" scrolling=\"no\" src='images/" + dadosJSONObj.language + ".txt'></iframe>" + "<img id=\"lingimg\"width=\"30%\" src='images/" + dadosJSONObj.language + ".png'></img></div><br>" */
    }
}
xhr.send();