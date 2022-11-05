document.addEventListener("submit", function (e) {
  e.preventDefault();

  let userInput = document.getElementById("item").value;
  const newListItem = createListItem(userInput);

  const checkBox = addCheckmark(newListItem);

  const deleteButton = addDeleteButton(newListItem);

  document
    .getElementById("list")
    .appendChild(deleteButton)
    .appendChild(checkBox);
  document.getElementById("item").value = "";
});

function createListItem(input) {
  const listItem = document.createElement("li");
  listItem.setAttribute("id", "overkill");
  const text = document.createTextNode(input);
  listItem.appendChild(text);
  return listItem;
}

function addCheckmark(listItem) {
  const checkMark = document.createElement("input");
  listItem.appendChild(checkMark);
  checkMark.addEventListener("click", function (c) {
    listItem.style.textDecoration = checkMark.checked ? "line-through" : "none";
  });
  checkMark.setAttribute("type", "checkbox");
  checkMark.setAttribute("id", "checker");
  return checkMark;
}

function addDeleteButton(listItem) {
  const deleteItem = document.createElement("button");
  deleteItem.addEventListener("click", function (r) {
    listItem.remove();
  });
  deleteItem.setAttribute("id", "deleter");
  deleteItem.innerText = "X";
  listItem.appendChild(deleteItem);
  return listItem;
}
