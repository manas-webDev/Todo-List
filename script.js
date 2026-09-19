let Input = document.querySelector(".Input-Box");
let Btn = document.querySelector(".Btn");
let List = document.querySelector(".List");

Btn.addEventListener("click", () => {
  if (Input.value.trim() === "") {
    alert("Type something");
  }else{
    let li = document.createElement("li");
  li.innerHTML = Input.value;
  List.appendChild(li);
  let span = document.createElement("span")
  span.innerHTML = "\u00d7"
  li.appendChild(span)
  }
  
  Input.value = "";
});

List.addEventListener("click",(event)=>{
    if(event.target.nodeName==="LI"){
        event.target.classList.toggle("checked");
    }else if(event.target.nodeName==="SPAN"){
event.target.parentElement.remove()
    }
})
