//ESCREVER E APAGA PALAVRAS NA TELA
const nomes = ["Desenvolvedor Web", "Desenvolvedor Full-Stack", "Estudante Engenharia de Software"];
const texto = document.getElementById("texto");

let nomeIndex = 0;
let letraIndex = 0;
let apagando = false;

function escrever() {
  const nomeAtual = nomes[nomeIndex];

  if (!apagando) {
    texto.innerHTML = nomeAtual.substring(0, letraIndex + 1);
    letraIndex++;

    if (letraIndex === nomeAtual.length) {
      apagando = true;
      setTimeout(escrever, 1000);
      return;
    }
  } else {
    texto.innerHTML = nomeAtual.substring(0, letraIndex - 1);
    letraIndex--;

    if (letraIndex === 0) {
      apagando = false;
      nomeIndex = (nomeIndex + 1) % nomes.length;
    }
  }

  setTimeout(escrever, apagando ? 100 : 150);
}

escrever();





