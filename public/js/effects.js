words = ["Freelancer", "Web developer", "Backend develper", "Data science learner"];

let i = 1;
type_text = document.querySelector(".key-text");
type_text.textContent = words[0];

setInterval(() => {
  type_text = document.querySelector(".key-text");
  type_text.style.animation = `typing 2s steps(${words[i].length}, end) infinite alternate`;
  type_text.style.width = `${i === 0 ? 10 : i === 1 ? 14 : i === 2 ? 16 : 18}ch`;
  type_text.textContent = words[i];
  i++;
  if (i >= words.length) {
    i = 0;
  }
}, 4000);
