const items = document.querySelectorAll(".item");
let activeItem = 0;

items.forEach((item) => {
  item.ondragstart = ondragstart;
  item.ondragend = ondragend;
});


const placeholders = document
  .querySelectorAll(".placeholder")
  .forEach((placeholder) => {
    placeholder.ondragover = ondragover;
    placeholder.ondragenter = ondragenter;
    placeholder.ondragleave = ondragleave;
    placeholder.ondrop = ondrop;
  });

function ondragstart(event) {
  event.target.classList.add("hold");
  setTimeout(() => {
    event.target.classList.add("hide");
  }, 0);
  activeItem = event.target.dataset.item
}
function ondragend(event) {
  event.target.classList.remove("hold", "hide");
}
function ondragover(event) {
  event.preventDefault();
}
function ondragenter(event) {
  event.target.classList.add("hover");
}
function ondragleave(event) {
  event.target.classList.remove("hover");
}
function ondrop(event) {
  event.target.classList.remove("hover");
  event.target.append(items[activeItem - 1]);
  activeItem = 0
}
