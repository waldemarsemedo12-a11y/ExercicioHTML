
var nome = "Valdemar  Reis de Oliveira";
var saudacao = "Olá," + nome + "! Seja bem-vindo ao curso de FrontEnd !";

console.log(saudacao);
function exibirSaudacao(){
    document.getElementById("mensagem").textContent = saudacao;
  
}

exibirSaudacao();