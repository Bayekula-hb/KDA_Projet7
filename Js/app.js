let link_linkedin = document.querySelector(".link--linkedin");
let link_github = document.querySelector(".link--github");
let link_instagram = document.querySelector(".link--instagram");
let link_twitter = document.querySelector(".link--twitter");

let img__profile = document.querySelector(".img--profile"),
    my__name = document.querySelector(".myname");

let msg_apropos = document.querySelector(".div--apropos p");

let img_html = document.querySelectorAll(".img--language");
console.log(img_html);
var link_server;
/**
 * 
 * @param {Prends la table qu'on veut sélectionner} table 
 * @returns {ça returne un lien avec le nom de la table}
 */
function link_server_json (table){
    link_server ="https://my-json-server.typicode.com/Bayekula-hb/KDA_Projet7/"+table;
    return link_server;
}

window.addEventListener("load", ()=>{
    let link = link_server_json("image");
    fetch(link).then(response =>{
        return response.json();
    }).then(data_db =>{
        for(const Data of data_db) {
            my__name.textContent = Data.name;
            img__profile.setAttribute('src',Data.image);
        }
    });
    link = link_server_json("link");
    fetch(link).then(response =>{
        return response.json();
    }).then(donnee =>{
        for(const lien of donnee) {
            link_instagram.setAttribute('href',lien.instagram);
            link_linkedin.setAttribute('href',lien.linkedin);
            link_twitter.setAttribute('href',lien.twitter);
            link_github.setAttribute('href',lien.github);
        }
    });
    link = link_server_json("language");
    fetch(link).then(response =>{
        return response.json();
    }).then(data_img =>{
        data_img
        console.log(data_img[3].title);
    });
    
    link = link_server_json("apropos");
    fetch(link).then(response =>{
        return response.json();
    }).then(data =>{
        for(element of data){
            msg_apropos.textContent = element.message;
        }
    });
});

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