let link_linkedin = document.querySelector(".link--linkedin"),
    link_github = document.querySelector(".link--github"),
    link_instagram = document.querySelector(".link--instagram"),
    link_twitter = document.querySelector(".link--twitter"),
    link_gmail = document.querySelector(".link--gmail"),
    link_linkedin_coordonnee = document.querySelector(".container--coordonnees .link--linkedin"),
    link_github_coordonnee = document.querySelector(".container--coordonnees .link--github");


let img__profile = document.querySelector(".img--profile"),
    my__name = document.querySelector(".myname");

let img_html = document.querySelectorAll(".img--language");

/**
 * 
 * @param {Prends la table qu'on veut sélectionner} table 
 * @returns {ça returne un lien avec le nom de la table}
 */
function link_server_json (table){
    let link_server ="https://my-json-server.typicode.com/Bayekula-hb/KDA_Projet7/"+table;
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
            link_linkedin_coordonnee.setAttribute('href', lien.linkedin);
            link_twitter.setAttribute('href',lien.twitter);
            link_github.setAttribute('href',lien.github);
            link_github_coordonnee.setAttribute('href',lien.github);
            link_gmail.setAttribute('href',lien.gmail);
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


btn__contact.addEventListener("click", function(event){
    event.preventDefault();
    section.classList.toggle("block--view");
    //section.style.display = "flex";
    //section.setAttribute("class", "block--view");
    //add_class(section,"block--view");
});
btn__fermer.addEventListener("click", function(event){
    event.preventDefault();
    section.classList.toggle("block--view");
    //delette_classe(section, "block--view");
    //document.querySelector(".section--div--4--hidden").style.display = "none";
})
console.log(btn__contact);
console.log(section);