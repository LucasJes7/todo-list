function createCloseButton(li) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");

  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  span.onclick = () => span.parentElement.style.display = "none";
}



function add() {
  let li = document.createElement('LI');
  let input_value = document.form_main.task.value;
  let input_text = document.createTextNode(input_value);

  li.appendChild(input_text);
  document.querySelector('ul').appendChild(li);
  document.form_main.task.value = "";

  createCloseButton(li);

  const listItems = document.querySelectorAll('li');


listItems.forEach(item => {
  item.addEventListener('click', () => {
    
    if (item.style.textDecoration === 'line-through') {
      
      item.style.textDecoration = 'none';
    } else {
      
      item.style.textDecoration = 'line-through';
    }
  });
});
}

