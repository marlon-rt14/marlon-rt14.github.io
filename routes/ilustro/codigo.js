const gallery = document.querySelector(".gallery-project");

const images = [
  "index.svg",
  "Frame 130.svg",
  "Frame 133.svg",
  "Frame 74.svg",
  "Frame 78.svg",
  "Frame 86.svg",
  "Frame 88.svg",
  "Frame 94.svg",
];

for (let index = 0; index < images.length; index++) {
  const item = document.createDocumentFragment();
  const tag_a = document.createElement("a");
  tag_a.setAttribute(
    "href",
    `../../public/img/projects/illustro/${images[index]}`
  );
  tag_a.setAttribute("target", "_blank");
  const img = document.createElement("img");
  img.setAttribute(
    "src",
    `../../public/img/projects/illustro/${images[index]}`
  );
  img.setAttribute("alt", images[index]);
  tag_a.appendChild(img);
  item.appendChild(tag_a);
  gallery.appendChild(item);
}