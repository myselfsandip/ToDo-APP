const input_box = document.getElementById('input-box');
const btn = document.getElementById('btn');
const listContainer = document.getElementById('list-container');
const imgc = document;
const x = '\u00d7';

var audio = new Audio('Assets/mixkit-attention-bell-ding-586.wav');
var audio2 = new Audio('Assets/bell-transition-141421.mp3');


function addTask(){
    if(input_box.value=== ''){
        alert('You must write something');
    }else{
        let li = document.createElement("li");
        li.innerHTML = input_box.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = x;
        li.appendChild(span);
    }
    input_box.value = "";
    saveData();
}

listContainer.addEventListener("click",function (e){
    //HERE "LI" & "SPAN" MUST BE IN UPPERCASE LETTER OTHERWISE IT WOULD NOT WORK
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        audio.play();
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        audio2.play();
        saveData();
    }
});

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();




