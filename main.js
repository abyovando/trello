const input = document.querySelector("input");
const textArea = document.getElementById("textArea");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");
const selectPrioridad = document.querySelector("select"); 

addBtn.addEventListener("click", (e)=>{

e.preventDefault();

const titulo = input.value;
const text = textArea.value.replaceAll('\n', '<br>');
const prioridad = selectPrioridad.value

if (titulo !== "", text  !== "" ){

            const li = document.createElement("li");
            const h3 = document.createElement("h3");
            const p = document.createElement("p");
            const selectPrioridad = document.createElement("prioridad");

            h3.textContent = titulo;
            p.textContent = text;

            li.appendChild(addDeleteBtn());
            li.appendChild(h3);
            li.appendChild(p);
            ul.appendChild(li);


            input.value = "";
            textArea.value = "";
            empty.style.display = "none";

}

}); 

const colorAltaPrioridad = "blue";
const colorMediaPrioridad = "yellow"
const colorBajaPrioridad = "green"

const colorPrioridad = (prioridad, li)=>{
  switch(prioridad){
      case "alta":
          li.style.backgroundColor = colorAltaPrioridad;
          break;
      case "media":
          li.style.backgroundColor = colorMediaPrioridad;
          break;
      case "baja":
          li.style.backgroundColor = colorBajaPrioridad;
          break;
  }
}

function addDeleteBtn () {

  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e)=>{
  
    const item = e.target.parentElement;
    
    ul.removeChild(item);
    
    const items = document.querySelectorAll("li");
    
    if(items.length === 0) {
        
        empty.style.display = "block"
}
  });
 
  return deleteBtn;

}

