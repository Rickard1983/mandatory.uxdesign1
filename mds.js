function disable(){
let text = document.querySelectorAll("input")
for (let all of text){
  all.setAttribute("disabled", true);
  console.log(all);



  }
  let labels = document.querySelectorAll('label');
    for(let label of labels) {
    }

}

function enable(){
let text = document.querySelectorAll("input")
for (let all of text){
  all.removeAttribute("disabled");
  console.log(all);

  }
  let labels = document.querySelectorAll('label');
    for(let label of labels) {
    }
}



let button = document.querySelector('.mds-disable__button')
button.addEventListener('click', disable)

let buttonenable = document.querySelector('.mds-enable__button')
buttonenable.addEventListener('click', enable)

textfield();
checkbox();
radiobutton();
mds-switch();
