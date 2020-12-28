/* Não mexer nessa parte */
(function () {
    document.getElementById('quantity').addEventListener('input', function (e) {
        e.target.value = e.target.value.replace(/\D/g, "")
    });

    document.getElementById('calcular').addEventListener('click', function (e) {
        calcular(parseInt(document.getElementById('quantity').value))
    });
})()

function calcular(gramas) {
    let mols = gramas * 22
    let resultado = mols * 2.57

    alert(`total: R$${resultado.toFixed(2)}`)

}
