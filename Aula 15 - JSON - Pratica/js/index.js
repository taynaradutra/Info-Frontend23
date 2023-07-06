const usuarios = [
  {
    id: 1,
    name: "Taynara Dutra",
    email: "taynara@ifpr.edu.br",
    senha: "12345",
  },
  {
    id: 2,
    name: "Fulano Silva",
    email: "fulano@gmail.com",
    senha: "12345",
  },
  {
    id: 3,
    name: "Fabiano Meira",
    email: "fabiano.meira@gmail.com",
    senha: "12345",
  },
];
//deve-se trabalhar com essa lista e converte-la para objetos.
const usuariosJSON = JSON.stringify(usuarios);

/* JSON.parse()*/
const listaUsuarios = JSON.parse(usuariosJSON);

let form = document.querySelector("form");
let botaoLogar = document.querySelector("#form-botao");

const checkInputs = (email, senha) => {
  let control = true;

  if (email.trim() == "") {
    control = false;
    /* adicionar estilização de erro */
  }

  if (senha.trim() == "") {
    control = false;
    /* adicionar estilização de erro */
  }

  return control;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("logou");

  let email = document.querySelector("#email").value;
  let senha = document.querySelector("#senha").value;

  if (!checkInputs(email, senha)) {
    alert("Email e senha são campos obrigatórios");
  } else {
    listaUsuarios.forEach((usuario) => {
      if (
        usuario.email.toUpperCase() === email.trim().toUpperCase() &&
        usuario.senha.toUpperCase() === senha.trim().toUpperCase()
      ) {
        // inserir em JSON e inserir no sessionStorage
        // a opcao de cima  TEM O <3 DA PROF
        // ou criar três atributos na sessionStorage
        const usuarioLogado = {
          id: usuario.id,
          nome: usuario.name,
          email: usuario.email,
        };

        sessionStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));
        window.location.href = "bemvindo.html";
      } else {
        // alert ou igual do campo obrigatório.
        alert("usuário inexistente!");
        event.preventDefault();
      }
    });
  }
});

//// ATIVIDADE

/// Passo a passo:

// 1) Quando a pessoa faz o login, deve-se validar login e senha não estão vazios.

// 2)  Se não estiverem, deve-se verificar se estão na lista dos dados.

// 3) Se estiver correta deve ser armazenado as informações do usuário (guardar um json do usuário (Não pode armazenar senha)) no localStorage.

// 4) Deve-se redirecionar  para uma nova página em que haverá um mensagem de "Bem-vind@ Fulano" e um botao de sair.

// 5) Sempre que a página for recarrega (onload), deve-se validar a informação do usuário (verificar se existe um usuário na sessão).

// 6) Caso o usuário clique em sair, deve ser redirecionado para a página de login e removido do localStorage.
