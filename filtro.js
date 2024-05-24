const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
];

const listaDeProductos = document.getElementById("lista-de-productos");
const input = document.querySelector('.input');

function displayProductos(productos) {
  productos.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("producto");

    const titulo = document.createElement("p");
    titulo.classList.add("titulo");
    titulo.textContent = producto.nombre;

    const imagen = document.createElement("img");
    imagen.setAttribute('src', producto.img);

    div.appendChild(titulo);
    div.appendChild(imagen);
    listaDeProductos.appendChild(div);
  });
}

displayProductos(productos);

const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (listaDeProductos.firstChild) {
    listaDeProductos.removeChild(listaDeProductos.firstChild);
  }

  const texto = input.value.toLowerCase();
  const productosFiltrados = filtrado(productos, texto);

  displayProductos(productosFiltrados);
};

const filtrado = (productos, texto) => {
  return productos.filter(item => 
    item.tipo.includes(texto) || item.color.includes(texto)
  );
};
