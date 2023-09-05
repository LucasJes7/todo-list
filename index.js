function createDeleteButton(li) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");

  span.className = "close";
  span.style.cursor = "pointer";
  span.appendChild(txt);
  li.appendChild(span);

  span.onclick = () => span.parentElement.style.display = "none";
}

function validateInput() {
  const input = document.getElementById("task");
  if( input.value == undefined || 
      input.value == "" ||
      input.value == " "
  ) {
    document.getElementById("addButton").disabled = true;
  }
  else {
    document.getElementById("addButton").disabled = false;

  }
}

function add() {
  const li = document.createElement('LI');
  const input_value = document.form_main.task.value;
  const input_text = document.createTextNode(input_value);

  input_text.addEventListener('click', () => {
      
    if (input_text.style.textDecoration === 'line-through') {
      
      input_text.style.textDecoration = 'none';
    } else {
      
      input_text.style.textDecoration = 'line-through';
    }
  });

  li.appendChild(input_text);
  document.querySelector('ul').appendChild(li);
  document.form_main.task.value = "";

  createDeleteButton(li);
  
  document.getElementById("addButton").disabled = true;

  //const listItems = document.querySelectorAll('li');


  
}

