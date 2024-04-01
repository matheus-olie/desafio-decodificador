var regex = /[A-ZÀ-ü0-9@#$%¨&*-_+=^´`]/;

function criptografarTexto () {
    let texto = document.getElementById("input").value;
    if (regex.test(texto)) {
        alert("Digite apenas letras minúsculas e sem acentos")
    } else {
        let textoCriptografado = texto
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat")

        document.getElementById("sidebar-input").value = textoCriptografado;
        document.getElementById("sidebar-butao").removeAttribute("disabled");
        document.getElementById("sidebar-butaoTransferir").removeAttribute("disabled");
    }
}

function descriptografarTexto(){
    let textoEncriptado = document.getElementById('input').value;
    if (regex.test(textoEncriptado)){
        alert("Digite apenas letras minúsculas e sem acentos")
    } else {
        let textoDescriptografado = textoEncriptado
        . replaceAll("enter","e")
        .replaceAll("imes", "i")
        .replaceAll( "ai","a")
        .replaceAll("ober","o")
        .replaceAll("ufat","u")

        document.getElementById("sidebar-input").value = textoDescriptografado;
        document.getElementById("sidebar-butao").removeAttribute("disabled");
        document.getElementById("sidebar-butaoTransferir").removeAttribute("disabled");
    }
}

function copiarTexto(){
    let textoCopiado = document.getElementById('sidebar-input').value;
    navigator.clipboard.writeText(textoCopiado)
}

function transferirTexto(){
    let textoTransferido = document.getElementById('sidebar-input').value
    document.getElementById('input').value = textoTransferido
    document.getElementById('sidebar-input').value = ""
}