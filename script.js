
const campoSenha = document.getElementById("senha");
const botao = document.getElementById("verificar");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", function() {
    const senha = campoSenha.value;

    if (senha.length === 0) {
        resultado.textContent = "Digite uma senha primeiro.";
    } else if (senha.length < 8) {
        resultado.textContent = "Senha fraca: use pelo menos 8 caracteres.";
    } else {
        resultado.textContent = "Senha com comprimento adequado!";
    }
});
