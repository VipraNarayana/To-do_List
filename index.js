//elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

//classes
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

//variables

let LIST , id;

//getItemFromLocalStorage

let data = localStorage.getItem("TODO");

//if data isn't empty
if(data){
  LIST = JSON.parse(data);
  id = LIST.length;
  loadList(LIST);
}else{
  LIST = [];
  id = 0;
}

//loaoding Items to user-interface

function loadList(array){
  array.forEach(function(item){
    addToDo(item.name, item.id, item.done, item.trash);
  });
}

//clearing the localStorage

clear.addEventListener("click",function(){
  localStorage.clear();
  location.reload();
});



//date
const options = {
  weekday: "long",
  month: "short",
  day: "numeric"
};
const today = new Date();

dateElement.innnerHTML = today.toLocaleDateString("en-US, options");

//To-do function

function addToDo(toDo, id, done, trash) {

  if(trash){return;}

  cosnt DONE = done? CHECK : UNCHECK;
  cosnt LINE = done? LINE_THROUGH : "";

  const item = '<li class="item">
    <i class="fa ${DONE} co" job="complete" id="${id}"></i>
    <p class = "text ${LINE}" >$(toDo)< /p>
    <i class = "fa fa-trash-o co" job = "delete" id = "${id}" > </i>';
    </li>

    const position = beforeend;

    list.insertAdjacentHTML(position, item);
}

//item to list user the enter key

document.addEventListener("keyup",function(even){
  if(event.keyCode == 13){
    const toDo = input.value;
    if(toDo){
      addToDo(todo, id, done, trash);

      LIST.push({
        name : toDo?
        id : id,
        done : false,
        trash : false;
      });

      //add item to local storage

        local.storage.setItem("TODO",JSON.stringify(LIST));

      id++
    }

    input.value = "";
  }
});

//complete todo

fucntion completeToDO(element){
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

  LIST[element.id].done = LIST[element.id].done ? false : true;
}

//remove todo

fucntion  removeToDo(element){
  element.parentNode.parentNode.removeChild(element.parentNode);

  List[element.id].trash = true;
}

//targeting the elements created dynamically

list.addEventListener("click,function(event){
  const element = event.target;
  const elementJob = element.attributes.job.value;

  if(element == "complete"){
    completeToDO(element);
  }elseif(element == "delete"){
    removeToDo(elementJob);
  }

  //add item to local storage

    local.storage.setItem("TODO",JSON.stringify(LIST));
}");
