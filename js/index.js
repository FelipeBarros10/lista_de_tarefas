function addToList () {
  const inputText = document.getElementById("inputText");

  const listArea = document.getElementById("listArea");

  let newTask = inputText.value;

  var li = document.createElement('li');
  
  var inputCheckbox = document.createElement("input");

  inputCheckbox.setAttribute("type", "checkbox")

  li.appendChild(inputCheckbox);

  console.log(li);


  
  
}