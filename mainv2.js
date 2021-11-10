const span = document.querySelector(".key-text");
const skills = ["Developer", "Designer", "Freelancer"];

const typer = (word, cont, interval) => {
  const span = document.querySelector(".key-text");
  span.innerHTML = "|";
  const length = word.length;
  let timer = setInterval(() => {
    span.innerHTML =
      span.innerHTML.substr(0, span.innerHTML.length - 1) +
      word.charAt(cont) +
      "|";
    // typer(word, cont);
    if (cont >= length) {
      clearInterval(timer);
      typerReverse(word, interval);
      // return true;
    } else {
      cont++;
    }
  }, interval);
};

typerReverse = (word, interval) => {
  let timer = setInterval(() => {
    span.innerHTML = span.innerHTML.substr(0, span.innerHTML.length - 2);
    span.innerHTML = span.innerHTML + "|";
    // console.log(span.textContent);
    if (span.innerHTML.length <= 1) {
      clearInterval(timer);
      // typer(word, 0, interval);
    }
  }, interval);
};

// typer("marlon", 0, 200);

// async function empezar() {
//   let cont = 0;
//   for (const word of skills) {
//     let timer = setInterval(async () => {
//       console.log(cont);
//       if (cont >= skills.length -1) {
//         clearInterval(timer);
//       } else {
//         cont++;
//       }
//     }, 200);
//   }
// }

// empezar();

for (const pos in skills) {
  let timer = setTimeout(async () => {
    await typer(skills[pos], 0, 150);
  }, 200);
  console.log(timer);
}

// function maquina(contenedor, texto, intervalo) {
//   // Calculamos la longitud del texto
//   longitud = texto.length;
//   // Obtenemos referencia del div donde se va a alojar el texto.
//   tagHtml = document.querySelector(".key-text");
//   tagHtml.innerHTML = "";
//   var i = 0;
//   // Creamos el timer
//   timer = setInterval(function () {
//     // Vamos añadiendo letra por letra y la _ al final.
//     tagHtml.innerHTML =
//       tagHtml.innerHTML.substr(0, tagHtml.innerHTML.length - 1) +
//       texto.charAt(i) +
//       "_";
//     // Si hemos llegado al final del texto..
//     if (i >= longitud) {
//       // Salimos del Timer y quitamos la barra baja (_)
//       clearInterval(timer);
//       tagHtml.innerHTML = tagHtml.innerHTML.substr(0, longitud);

//       maquina("typer", texto, 100);
//       return true;
//     } else {
//       // En caso contrario.. seguimos
//       i++;
//     }
//   }, intervalo);
// }

// var texto = "Texto Ejemplo / Ejemplo 2  / Ejemplo 3";
// maquina("typer", texto, 100);
