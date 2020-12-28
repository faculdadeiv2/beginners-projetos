var produtos = JSON.parse(localStorage.getItem('produtos'))

if (produtos == null) {
    produtos = []
}

var tabela = document.getElementById('tabula')

for (i = 0; i < produtos.length; i++) {
    var produto = produtos[i]
    var name = produto['name']
    var ns = produto['ns']
    var equip = produto['equip']
    var carac = produto['carac']

    var th = tabula.insertRow(1)
    var td = [th.insertCell(0), th.insertCell(1), th.insertCell(2), th.insertCell(3)]
    td[0].innerHTML = name
    td[2].innerHTML = ns
    td[1].innerHTML = equip
    td[3].innerHTML = carac
}