const gallery = document.querySelector(".gallery-project-mobile");

const images = [
  "index.svg",
  "imagen1.svg",
  "imagen2.svg",
  "imagen3.svg",
  "imagen4.svg",
  "imagen5.svg",
  "imagen6.svg",
  "imagen7.svg",
  "imagen8.svg",
  "imagen9.svg",
];

for (let index = 0; index < images.length; index++) {
  const item = document.createDocumentFragment();
  const tag_a = document.createElement("a");
  tag_a.setAttribute(
    "href",
    `../../public/img/projects/dpipos/${images[index]}`
  );
  tag_a.setAttribute("target", "_blank");
  const img = document.createElement("img");
  img.setAttribute(
    "src",
    `../../public/img/projects/dpipos/${images[index]}`
  );
  img.setAttribute("alt", images[index]);
  tag_a.appendChild(img);
  item.appendChild(tag_a);
  gallery.appendChild(item);
}
