'use strict';

console.log("======START=========");

const closeModal = function()
{
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");
console.log(btnOpenModal);

btnOpenModal.forEach((element) => element.addEventListener("click",
    function(){
        console.log(element.textContent);
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    }
));
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("onkeydown",function(e){
    console.log(e.key);
    if(e.key === "Escape")
    {
        console.log("escape");
    }
});



console.log("======FINISH========");
