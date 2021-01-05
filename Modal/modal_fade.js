const app = document.body.querySelector("#App");

const modalBtn = document.createElement("button");
modalBtn.innerText = "modal-open";
modalBtn.classList.add("btn-modal");
document.body.querySelector("#App").appendChild(modalBtn);

const modalBg = document.createElement("div");
const modalWindow = document.createElement("div");

modalBg.classList.add("modal-bg");
modalBg.appendChild(modalWindow);

modalWindow.classList.add("modal-window");
document.body.querySelector("#App").appendChild(modalBg);

function toggling(e) {
  console.log('toggling', e.target);
  modalBg.classList.toggle("open");
  modalWindow.classList.toggle("open");
}


modalBtn.addEventListener("click", (e) => {
  if(e.target == modalBtn)
    toggling(e);
  console.log("modal Open");
});

window.addEventListener("click", (e) => {
  if (e.target == modalBg && e.target != modalBtn) {
    toggling(e);
  }
});

window.addEventListener("keydown", (e) => {
  if (e.keyCode == 27 && !modalBg.classList.contains("unstaged")) {
    toggling(e);
  }
});
modalBg.addEventListener("transitionend", function (e) {
  document.body.removeEventListener("transitionend", arguments.callee);
});


const close = document.createElement('div');
close.innerText = 'X';
modalWindow.appendChild(close);

close.addEventListener('click', e => {
  console.log('close',e.target);
  
});

const testBtn = document.body.querySelector('.testbtn');
const testBox = document.body.querySelector('.testbox');

testBtn.addEventListener('click', e=>{
  testBox.classList.toggle('test-open');
})