const listaAnimais = [
  {
    id: 1,
    titulo: "Lorem ipsum dolor sit amet.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctus tristique est, a faucibus elit. Vivamus et dapibus mi, id facilisis nunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper tortor, iaculis viverra diam augue eget odio. Nullam sit amet massa non nunc finibus rhoncus eu id elit. Nam ut tincidunt nisl. Duis consequat hendrerit metus id fermentum. Integer risus massa, fermentum lacinia pellentesque vel, congue nec ex. Etiam et tincidunt urna. Donec dolor justo, vehicula eu tincidunt id, eleifend eu leo. Donec eu dolor sapien. Maecenas et accumsan dolor, eget placerat massa.",
    imgURL: "./img/img1.webp",
  },
  {
    id: 2,
    titulo: "Lorem ipsum dolor sit amet.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctus tristique est, a faucibus elit. Vivamus et dapibus mi, id facilisis nunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper tortor, iaculis viverra diam augue eget odio. Nullam sit amet massa non nunc finibus rhoncus eu id elit. Nam ut tincidunt nisl. Duis consequat hendrerit metus id fermentum. Integer risus massa, fermentum lacinia pellentesque vel, congue nec ex. Etiam et tincidunt urna. Donec dolor justo, vehicula eu tincidunt id, eleifend eu leo. Donec eu dolor sapien. Maecenas et accumsan dolor, eget placerat massa.",
    imgURL: "./img/img2.jpg",
  },
  {
    id: 3,
    titulo: "Lorem ipsum dolor sit amet.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctus tristique est, a faucibus elit. Vivamus et dapibus mi, id facilisis nunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper tortor, iaculis viverra diam augue eget odio. Nullam sit amet massa non nunc finibus rhoncus eu id elit. Nam ut tincidunt nisl. Duis consequat hendrerit metus id fermentum. Integer risus massa, fermentum lacinia pellentesque vel, congue nec ex. Etiam et tincidunt urna. Donec dolor justo, vehicula eu tincidunt id, eleifend eu leo. Donec eu dolor sapien. Maecenas et accumsan dolor, eget placerat massa.",
    imgURL: "./img/img3.webp",
  },
  {
    id: 4,
    titulo: "Lorem ipsum dolor sit amet.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctus tristique est, a faucibus elit. Vivamus et dapibus mi, id facilisis nunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper tortor, iaculis viverra diam augue eget odio. Nullam sit amet massa non nunc finibus rhoncus eu id elit. Nam ut tincidunt nisl. Duis consequat hendrerit metus id fermentum. Integer risus massa, fermentum lacinia pellentesque vel, congue nec ex. Etiam et tincidunt urna. Donec dolor justo, vehicula eu tincidunt id, eleifend eu leo. Donec eu dolor sapien. Maecenas et accumsan dolor, eget placerat massa.",
    imgURL: "./img/img4.jpg",
  },
  {
    id: 5,
    titulo: "Lorem ipsum dolor sit amet.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctus tristique est, a faucibus elit. Vivamus et dapibus mi, id facilisis nunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper tortor, iaculis viverra diam augue eget odio. Nullam sit amet massa non nunc finibus rhoncus eu id elit. Nam ut tincidunt nisl. Duis consequat hendrerit metus id fermentum. Integer risus massa, fermentum lacinia pellentesque vel, congue nec ex. Etiam et tincidunt urna. Donec dolor justo, vehicula eu tincidunt id, eleifend eu leo. Donec eu dolor sapien. Maecenas et accumsan dolor, eget placerat massa.",
    imgURL: "./img/img5.webp",
  },
];

let container = document.querySelector(".container");

const criacaoCards = () => {
  listaAnimais.forEach((animal) => {
    let card = `   
            <div class="card">
                <img class="card-img" src=${animal.imgURL} /> 
                <h2 class="card-titulo"> ${animal.titulo} </h2>
                <p class="card-descricao"> ${animal.descricao} </p>               
                <a class="card-botao" idAnimal="${animal.id}">
                  ADOTAR 
                 </a>
            </div>
        `;
    container.innerHTML += card;
  });
};

window.onload = () => {
  criacaoCards();

  let cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", () => {
      card.style.backgroundColor = "yellow";
    });

    card.addEventListener("mouseout", () => {
      card.style.backgroundColor = "transparent";
    });

    card.lastElementChild.addEventListener("click", (event) => {
      event.preventDefault();
      sessionStorage.setItem(
        "idAnimal",
        card.lastElementChild.getAttribute("idAnimal")
      );
      window.location.href = "../adotar.html";
    });
  });
};
