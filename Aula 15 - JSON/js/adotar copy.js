let formulario = document.querySelector("form");
const campoObrigatorio = `<div class="campo-obrigatorio">
<img src="../img/erro.png"/>
<span> Campo obrigatório  </span>
</div>`;

/* Atividade é validar o radiobuttons, select e textarea */
/* e se fosse um checkbox? Precisa iterar pelas opções, exemplo: https://pt.stackoverflow.com/questions/468026/como-verificar-se-ao-menos-um-checkbox-est%C3%A1-ativado */
const checkInputs = (nome, telefone, email, renda, residencia, intencao) => {
  console.log("entrou");
  let control = true;

  if (nome.value.trim() == "") {
    nome.classList.add("erro");
    control = false;
  }

  if (telefone.value.trim() == "") {
    telefone.classList.add("erro");
    control = false;
  }

  if (email.value.trim() == "") {
    email.classList.add("erro");
    control = false;
  }

  /* renda == null */
  /* parentElement  */

  if (renda == null) {
    let divRenda = document.querySelector(".form-item-radio").parentElement;
    divRenda.classList.add("erro");
    divRenda.innerHTML += campoObrigatorio;
    control = false;
  }

  /** residencia */
  /* incluir value no HTML */
  if (residencia.value == "") {
    let divResidencia = document.querySelector("#residencia");
    console.log(divResidencia);
    divResidencia.classList.add("erro");
    control = false;
  }

  /* intencao */
  if (intencao.value.trim() == "") {
    intencao.classList.add("erro");
    control = false;
  }

  return control;
};

formulario.addEventListener("submit", (event) => {
  let nome = document.querySelector("#nome");
  let telefone = document.querySelector("#telefone");
  let email = document.querySelector("#email");
  let renda = document.querySelector("input[type='radio']:checked");
  let residencia = document.querySelector("#residencia");
  let opcaoResidencia = residencia.options[residencia.selectedIndex];
  let intencao = document.querySelector("#intencao");

  if (!checkInputs(nome, telefone, email, renda, opcaoResidencia, intencao)) {
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
      /* incluir animal */
    };
    console.log(adotante);

    /* TRANSFORMAR PARA JSON */
    /* JSON.parse() - json to object */
    /* JSON.stringfy() - object to json  */

    const adotanteJson = JSON.stringify(adotante);
    console.log(adotanteJson);
  }
});
