document.getElementById("selec").onclick = function check() {
    document.getElementById("comp").disabled = this.checked;
    document.getElementById("comp").value = "Campo desabilitado!";
}

/*  */

function ValidaCPF() {
    var RegraValida = document.getElementById("RegraValida").value;
    var cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;
    if (cpfValido.test(RegraValida) == true) {
        alert("CPF Válido");
    } else {
        alert("CPF Inválido");
    }
}

function fMasc(objeto, mascara) {
    obj = objeto
    masc = mascara
    setTimeout("fMascEx()", 1)
}

function fMascEx() {
    obj.value = masc(obj.value)
}

function mCPF(cpf) {
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    return cpf
}

/*  */

function mascara(t, mask) {
    var i = t.value.length;
    var saida = mask.substring(1, 0);
    var texto = mask.substring(i)
    if (texto.substring(0, 1) != saida) {
        t.value += texto.substring(0, 1);
    }
}

/*  */

function validarrg() {
    var rg = document.getElementById("rgvalido");

    if (rg.value.length == 12) {
        alert("RG Válido!")
    } else {
        alert("RG Inválido!")
    }
}

/*  */

function validarcep() {
    var rg = document.getElementById("cepvalido");

    if (rg.value.length == 9) {
        alert("CEP Válido!")
    } else {
        alert("CEP Inválido!")
    }
}

/*  */

function validarcampos() {
    var Nome = formuser.Nome.value;
    if (Nome == "") {
        alert("Preencha o campo Nome do Funcionário.");
        formuser.Nome.focus();
        return false;
    }
    var RegraValida = formuser.RegraValida.value;
    if (RegraValida == "") {
        alert("Preencha o campo CPF.");
        formuser.RegraValida.focus();
        return false;
    }
    var rgvalido = formuser.rgvalido.value;
    if (rgvalido == "") {
        alert("Preencha o campo RG");
        formuser.rgvalido.focus();
        return false;
    }
    var nasc = formuser.nasc.value;
    if (nasc == "") {
        alert("Preencha o campo Data de Nascimento");
        formuser.nasc.focus();
        return false;
    }
    var cnh = formuser.cnh.value;
    if (cnh == "") {
        alert("Preencha o campo Tipo de CNH");
        formuser.cnh.focus();
        return false;
    }
    var estadocivil = formuser.estadocivil.value;
    if (estadocivil == "") {
        alert("Preencha o campo Estado Civil");
        formuser.ec.focus();
        return false;
    }
    var cepvalido = formuser.cepvalido.value;
    if (cepvalido == "") {
        alert("Preencha o campo CEP");
        formuser.cepvalido.focus();
        return false;
    }
    var rua = formuser.rua.value;
    if (rua == "") {
        alert("Preencha o campo Rua");
        formuser.rua.focus();
        return false;
    }
    var bairro = formuser.bairro.value;
    if (bairro == "") {
        alert("Preencha o campo Bairro");
        formuser.bairro.focus();
        return false;
    }
    var estado = formuser.estado.value;
    if (estado == "") {
        alert("Preencha o campo Estado");
        formuser.estado.focus();
        return false;
    }
    var numero = formuser.numero.value;
    if (numero == "") {
        alert("Preencha o campo Numero da Casa");
        formuser.numero.focus();
        return false;
    }

    var comp = formuser.comp[1].value;
    if (comp == "") {
        alert("Campo Obrigatório!")
        formuser.comp.focus();
        return false;
    }


    const fields = {
        "nome": formuser.Nome.value,
        "CPF": formuser.RegraValida.value,
        "RG": formuser.rgvalido.value,
        "data_nasc": formuser.nasc.value,
        "tipo_cnh": formuser.cnh.value,
        "estado_civil": formuser.ec.value,
        "CEP": formuser.cepvalido.value,
        "rua": formuser.rua.value,
        "bairro": formuser.bairro.value,
        "cidade": formuser.cidade.value,
        "estado": formuser.estado.value,
        "numero": formuser.numero.value,
        "complemento": formuser.comp[1].value
    };
    console.log(fields);

    const objetojson = JSON.stringify(fields)

    console.log(objetojson);

    const xhr = new XMLHttpRequest();

    xhr.open("POST", "https://beginner-api.herokuapp.com/save");

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            const objetosalvo = JSON.parse(xhr.responseText);
            if (objetosalvo.Sucesso != undefined) {
                alert("Cadastro Efetuado!");
            } else {
                alert("Erro de Formulário!");
            }
        }
    }
    xhr.send(objetojson);
}

/*  */

function getDadosEnderecoCEP(cep) {

    let xhr = new XMLHttpRequest()

    let url = 'https://viacep.com.br/ws/' + cep + '/json/unicode/'

    xhr.open('GET', url, true)

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                let dadosJSONText = xhr.responseText
                let dadosJSONObj = JSON.parse(dadosJSONText)

                document.getElementById('rua').value = dadosJSONObj.logradouro
                document.getElementById('bairro').value = dadosJSONObj.bairro
                document.getElementById('cidade').value = dadosJSONObj.localidade
                document.getElementById('estado').value = dadosJSONObj.uf
            }
        }
    }
    xhr.send();

}