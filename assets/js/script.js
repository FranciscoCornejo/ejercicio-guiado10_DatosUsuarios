let contenedorDatos = document.getElementById("user-data");

// Función asincrónica y autoejecutable para obtener los usuarios desde la API
(async function getUsers() {
  try {
    let respuesta = await fetch("https://randomuser.me/api/?results=10");
    let datos = await respuesta.json();

    // Llamar a la función para mostrar los usuarios en el HTML
    console.log(datos);
    mostrarUsuarios(datos.results);
  } catch (error) {
    console.log(error);
  }
})();

// Función para mostrar los usuarios en el HTML
function mostrarUsuarios(usuarios) {
  // Limpiar el contenedor antes de mostrar los nuevos usuarios
  contenedorDatos.innerHTML = "";

  // Iterar sobre los usuarios y crear una fila para cada tarjeta
  usuarios.forEach(function (usuario) {
    // Crear una fila para la tarjeta del usuario
    let fila = document.createElement("div");
    fila.classList.add("row", "mt-3", "justify-content-center");

    // Crear un elemento de div para la tarjeta del usuario
    let divTarjeta = document.createElement("div");
    divTarjeta.classList.add("card", "text-center", "col-md-6");
    divTarjeta.style.width = "18rem";

    // Crear un elemento de imagen
    let imgElemento = document.createElement("img");
    imgElemento.src = usuario.picture.large;
    imgElemento.alt = "Usuario Image";
    imgElemento.classList.add("card-img-top");

    // Crear un elemento de div para el cuerpo de la tarjeta
    let divCuerpo = document.createElement("div");
    divCuerpo.classList.add("card-body");

    // Crear un solo elemento de párrafo (p) para todas las propiedades del usuario
    let infoUsuarioElemento = document.createElement("p");
    infoUsuarioElemento.innerHTML = `
        Nombre: ${usuario.name.first} <br>
        Email: ${usuario.email} <br>
        Teléfono: ${usuario.phone}
      `;

    // Agregar los elementos al divCuerpo
    divCuerpo.append(infoUsuarioElemento);

    // Agregar la imagen y el cuerpo al divTarjeta
    divTarjeta.append(imgElemento, divCuerpo);

    // Agregar la tarjeta al contenedor
    fila.append(divTarjeta);
    contenedorDatos.append(fila);
  });
}

//Variante con DIV
// let contenedorDatos = document.getElementById("user-data");

// // Función asincrónica y autoejecutable para obtener los usuarios desde la API
// (async function getUsers() {
//   try {
//     let respuesta = await fetch("https://randomuser.me/api/?results=10");
//     let datos = await respuesta.json();

//     // Llamar a la función para mostrar los usuarios en el HTML
//     console.log(datos);
//     mostrarUsuarios(datos.results);
//   } catch (error) {
//     console.log(error);
//   }
// })();

// // Función para mostrar los usuarios en el HTML
// function mostrarUsuarios(usuarios) {
//   // Limpiar el contenedor antes de mostrar los nuevos usuarios
//   contenedorDatos.innerHTML = "";

//   // Iterar sobre los usuarios y crear elementos de div para cada uno
//   usuarios.forEach(function (usuario) {
//     // Crear un elemento de div para el usuario
//     let divUsuario = document.createElement("div");
//     divUsuario.style.border = "1px solid #ccc";
//     divUsuario.style.padding = "10px";
//     divUsuario.style.marginBottom = "10px";

//     // Crear un elemento de imagen (img) para la propiedad de la imagen
//     let imgElemento = document.createElement("img");
//     imgElemento.src = usuario.picture.large;
//     imgElemento.alt = "Usuario Image";

//     // Crear un solo elemento de párrafo (p) para todas las propiedades del usuario
//     let infoUsuarioElemento = document.createElement("p");
//     infoUsuarioElemento.innerHTML = `
//   Nombre: ${usuario.name.first} <br>
//   Email: ${usuario.email} <br>
//   Teléfono: ${usuario.phone}
// `;

//     // agregar los elementos al divUsuario
//     divUsuario.append(imgElemento, infoUsuarioElemento);

//     // agregar el divUsuario al contenedor
//     contenedorDatos.append(divUsuario);
//   });
// }
