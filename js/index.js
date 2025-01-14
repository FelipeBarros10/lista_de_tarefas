function addToList() {
  const inputText = document.getElementById("inputText");

  const listArea = document.getElementById("listArea");

  let newTask = inputText.value;

  if (newTask == "") {
    alert("Insira a tarefa");
  } else {
    var li = document.createElement("li");

    var inputCheckbox = document.createElement("input");

    inputCheckbox.setAttribute("type", "checkbox");

    li.appendChild(inputCheckbox);

    var text = document.createElement("span");

    text.textContent = newTask;

    li.appendChild(text);

    var selectPriority = document.createElement("select");

    var optionsValue = ["Urgente", "Importante", "Rotina"];

    var options = [];

    optionsValue.forEach((item) => {
      if (item) {
        options = document.createElement("option");
        options.textContent = item;

        selectPriority.appendChild(options);
      }
    });

    li.appendChild(selectPriority);

    selectPriority.addEventListener("change", (event) => {
      selectPriority.style.removeProperty("background-color");

      if (event.target.value === "Urgente") {
        selectPriority.style.setProperty("background-color", "red");
      } else if (event.target.value === "Importante") {
        selectPriority.style.setProperty(
          "background-color",
          "rgb(163, 124, 51)"
        );
      } else if (event.target.value === "Rotina") {
        selectPriority.style.setProperty("background-color", "rgb(29, 78, 0)");
      }
    });

    var trashBtn = document.createElement("button");

    var iconTrashBtn = document.createElement("i");

    iconTrashBtn.className = "bi bi-trash";

    trashBtn.appendChild(iconTrashBtn);

    li.appendChild(trashBtn);

    listArea.appendChild(li);

    inputCheckbox.addEventListener("change", () => {
      text.classList.toggle("checked", inputCheckbox.checked);

      li.classList.toggle("li-checked", inputCheckbox.checked);
    });

    trashBtn.addEventListener("click", () => {
      li.remove();
    });

    inputText.value = "";
  }
}
