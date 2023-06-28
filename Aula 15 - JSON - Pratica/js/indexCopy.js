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

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let usuario = document.querySelector("#email").value;
  let senha = document.querySelector("#senha").value;
  // validar se campos não estão nulos.

  console.log(listaUsuarios);

  listaUsuarios.forEach(function (itemUsuario) {
    if (
      itemUsuario.email.trim().toUpperCase() === usuario.toUpperCase() &&
      itemUsuario.senha.trim().toUpperCase() === senha.toUpperCase()
    ) {
      //* aqui insere no session store. */
    } else {
      event.preventDefault();
    }
  });
});

//// ATIVIDADE

/// Passo a passo:

// 1) Quando a pessoa faz o login, deve-se validar login e senha não estão nulos.

// 2)  Se não estiverem, deve-se verificar se estão na lista dos dados.

// 2) Se estiver correta deve ser armazenado as informações do usuário (guardar um json do usuário (Não pode armazenar senha)) no localStorage.

// 3) Deve-se redirecionar  para uma nova página em que haverá um mensagem de "Bem-vind@ Fulano" e um botao de inserir.

// 4) Sempre que a página for recarrega (onload), deve-se validar a informação do usuário (verificar se existe um usuário na sessão).

// 5) Caso o usuário clique em sair, deve ser redirecionado para a página de login e removido do localStorage.
