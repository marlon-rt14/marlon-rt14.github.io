
const spans = document.querySelectorAll(".key-text");
// const span = document.querySelector(".key-text");
const skills = ["Developer. ", "Designer. ", "Freelancer. "];

const releaseWord = 0;
const releaseKey = 180;

let contSpan = 0;

function typer(word, interval) {
  const printReverse = (interval) => {
    let timer = setInterval(() => {
      for (const span of spans) {
        span.innerHTML =
          span.innerHTML.substring(0, span.innerHTML.length - 2) +
          "|";
      }
      // console.log(texto);
      // span.innerHTML = "dd";
      if (spans[0].innerHTML.length <= 1) {
        clearInterval(timer);
        // return;
      }
    }, getInterval(interval));
    return 1;
  };

  /*const wait = (interval) => {
    const hide = () => {
      console.log("hide");
      setTimeout(() => {
        spans[0].innerHTML = spans[0].innerHTML.substring(0, spans[0].innerHTML.length - 1);
      }, interval / 2);
      show();
    };

    const show = () => {
      console.log("show");
      setTimeout(() => {
        spans[0].innerHTML = spans[0].innerHTML + "|";
      }, interval / 2);
    };

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(hide());
      }, interval);
    });
  };*/

  const print = (word, interval) => {
    let pos = 0;
    let timer = setInterval(async () => {
      for (const span of spans) {
        span.innerHTML =
          span.innerHTML.substring(0, span.innerHTML.length - 1) +
          word.charAt(pos) +
          "|";
      }
      if (pos === word.length - 1) {
        clearInterval(timer);
        // console.log("main");
        // setTimeout(async () => {
        // 	await wait(interval - getInterval(interval) * 2);

        // }, 500);
        printReverse(interval);
        return;
      }
      pos++;
    }, getInterval(interval));
    return 1;
  };

  const getInterval = (interval) => {
    return interval / 2;
  };

  return new Promise((resolve) => {
    // console.log("calling print");
    setTimeout(() => {
      resolve(print(word, interval));
    }, interval);
  });
}

async function empezar(word = skills[0], cont = 0) {
  // console.log("calling typer");
  const timer = setTimeout(async () => {
    // console.log(word);
    await typer(word, releaseKey * 2);
    cont++;
    if (cont >= skills.length) {
      clearTimeout(timer);
      cont = 0;
      // return;
    }
    const aux = skills[cont];
    // console.log(cont + " " + aux);
    empezar(aux, cont);
  }, word.length * releaseKey * 2);
}

empezar();
