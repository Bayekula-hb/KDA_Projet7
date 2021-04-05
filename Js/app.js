// let btn__contact = document.querySelector(".menu__liste li>.btn--contact--menu");
let btn__contact = document.querySelector(".btn--contact--menu");
let section = document.querySelector(".section--div--4--hidden");
let btn__fermer = document.querySelector(".btn--close");

function add_class (name__element,name__classe){
    name__element.classList.add(name__classe);
}
function delette_classe (name__element,name__classe){
    name__element.classList.remove(name__classe);
}
btn__contact.addEventListener("click", function(event){
    event.preventDefault();
    section.classList.add("block--view");
    //section.style.display = "flex";
   //section.setAttribute("class", "block--view");
   //add_class(section,"block--view");
});
btn__fermer.addEventListener("click", function(event){
    event.preventDefault();
    section.classList.remove("block--view");
    //delette_classe(section, "block--view");
    //document.querySelector(".section--div--4--hidden").style.display = "none";
})
console.log(btn__contact);
//console.log(form);