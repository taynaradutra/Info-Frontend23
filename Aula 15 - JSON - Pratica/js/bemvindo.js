window.addEventListener("load", () => {
  let titulo = document.querySelector("h1");

  if (sessionStorage.getItem("usuarioLogado") != null) {
    let usuarioLogadoJSON = sessionStorage.getItem("usuarioLogado");
    let usuarioLogado = JSON.parse(usuarioLogadoJSON);

    titulo.innerText = `Bem-vind@ ${usuarioLogado.nome}`;
  }
});

let botaoSair = document.querySelector("button");
botaoSair.addEventListener("click", () => {
  sessionStorage.removeItem("usuarioLogado");
  window.location.href = "index.html";
});
