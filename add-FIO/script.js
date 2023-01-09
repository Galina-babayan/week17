let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
});

let comments = [];
console.log(comments);
const buttonComments = document.querySelector("#addComment");
buttonComments.addEventListener("click", addComment);

function addComment() {
  let comment = document.querySelector("#comment").value;
  console.log(comment);

  let checkFirst;
  checkFirst = comment.replace(/\s+/g, " ").trim();
  document.querySelector("#comment").value = "";
  console.log(checkFirst);

  let checkSecond;
  checkSecond = checkFirst.toLowerCase();
  console.log(checkSecond);

  let fio = checkSecond.split(" ");

  console.log(fio);

  let result = fio.map(function (item) {
    return item[0].toUpperCase() + item.substr(1);
  });

  console.log(result);
  console.log(result[0]);

  let optionsString = "";
  optionsString += `<span>Имя: ${result[0]}</span> <br/> `;
  document.querySelector("#fio").innerHTML = optionsString;
  console.log(optionsString);

  optionsString += `<span>Отчество: ${result[1]}</span> <br/> `;
  document.querySelector("#fio").innerHTML = optionsString;

  optionsString += `<span>Фамилия: ${result[2]}</span> `;
  document.querySelector("#fio").innerHTML = optionsString;
}
