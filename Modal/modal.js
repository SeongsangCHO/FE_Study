const app = document.body.querySelector("#App");

const modalBtn = document.createElement("button");
modalBtn.innerText = "modal-open";
modalBtn.classList.add("btn-modal");
document.body.querySelector("#App").appendChild(modalBtn);

const modalBg = document.createElement("div");
const modalWindow = document.createElement("div");

modalBg.classList.add("modal-bg");
modalWindow.classList.add("modal-window");
document.body.querySelector("#App").appendChild(modalBg);
app.querySelector(".modal-bg").style.display = "none";


function hide() {
  modalBg.style.display = "none";
  modalWindow.style.display = "none";
}

function show() {
  modalBg.style.display = "block";
  modalBg.appendChild(modalWindow);
  modalWindow.style.display = "block";
}

modalBtn.addEventListener("click", (e) => {
  show();
  console.log("modal Open");
});

window.addEventListener("click", (e) => {
  if (e.target == modalBg) {
    console.log('hide');
    hide();
  }
});

window.addEventListener("keydown", (e) => {
  if (e.keyCode == 27) {
    hide();
  }
});
