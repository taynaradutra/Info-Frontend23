let formulario = document.querySelector("form");
const objObrigatorio = `
<div class="campo-obrigatorio">
  <img src="../img/erro.png">
  <small> * Campo obrigatório  </small>
</div>

`;

/* Atividade é validar o radiobuttons, select e textarea */
/* e se fosse um checkbox? Precisa iterar pelas opções, exemplo: https://pt.stackoverflow.com/questions/468026/como-verificar-se-ao-menos-um-checkbox-est%C3%A1-ativado */
const checkInputs = (
  nome,
  telefone,
  email,
  renda,
  residencia,
  opcaoResidencia,
  intencao
) => {
  let control = true;

  if (nome.value.trim() == "") {
    nome.classList.add("erro");
    control = false;

    nome.parentElement.innerHTML += objObrigatorio;
  }

  if (telefone.value.trim() == "") {
    telefone.classList.add("erro");
    control = false;

    telefone.parentElement.innerHTML += objObrigatorio;
  }

  if (email.value.trim() == "") {
    email.classList.add("erro");
    control = false;

    email.parentElement.innerHTML += objObrigatorio;
  }

  /* renda == null */
  /* parentElement  */
  if (renda == null) {
    console.log("é nulo");
    let divRenda = document.querySelector(".form-item-radio").parentElement;
    console.log(divRenda);
    divRenda.classList.add("erro");
    control = false;

    divRenda.innerHTML += objObrigatorio;
  }

  /** opcaoResidencia == ""*/
  /* incluir value no HTML */
  if (opcaoResidencia.value == "") {
    residencia.classList.add("erro");
    control = false;

    residencia.parentElement.innerHTML += objObrigatorio;
  }

  /* intencao */

  if (intencao.value.trim() == "") {
    intencao.classList.add("erro");
    control = false;

    intencao.parentElement.innerHTML += objObrigatorio;
  }

  return control;
};

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  let nome = document.querySelector("#nome");
  let telefone = document.querySelector("#telefone");
  let email = document.querySelector("#email");
  let renda = document.querySelector("input[type='radio']:checked");
  let residencia = document.querySelector("#residencia");
  let opcaoResidencia = residencia.options[residencia.selectedIndex];
  let intencao = document.querySelector("#intencao");

  if (
    !checkInputs(
      nome,
      telefone,
      email,
      renda,
      residencia,
      opcaoResidencia,
      intencao
    )
  ) {
    event.preventDefault();
  } else {
    const adotante = {
      id: 1,
      nome: nome.value,
      telefone: telefone.value,
      renda: renda.value,
      residencia: opcaoResidencia.value,
      intencao: intencao.value,
      animal: sessionStorage.getItem("idAnimal"),
    };

    event.preventDefault();

    /* TRANSFORMAR PARA JSON */
    /* JSON.parse() - json to object */
    /* JSON.stringfy() - object to json  */

    const objetoJSON = JSON.stringify(adotante);
    console.log(objetoJSON);

    /* recebi um json */
    const objteste = JSON.parse(objetoJSON);
  }
});
