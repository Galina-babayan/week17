let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
});

const button = document.querySelector("button");
const comments = document.querySelector("#comments");
const text = document.querySelector("textarea");
let arrComments = [];
button.addEventListener("click", addComment);

function addComment() {
  let comment = text.value;
  text.value = "";

  arrComments.push(comment);

  comments.innerHTML = "";

  render(comments, arrComments);
}

function render(parentNode, data) {
  for (let i = 0; i < data.length; i++) {
    let item = data[i];

    const filterWords = ["viagra", "xxx"];
    let filteredText = item;
    for (let word of filterWords) {
      let reg = new RegExp(word, "ig");
      filteredText = filteredText.replace(reg, "***");
    }
    let node = document.createElement("div");
    node.classList.add("users-comments");
    node.textContent = filteredText;

    parentNode.append(node);

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("form__button-del");
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", () => {
      node.remove();
      data.splice(i, 1);
    });

    node.append(deleteButton);
  }
}
