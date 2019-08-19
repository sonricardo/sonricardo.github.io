var link = "rubik/rubik.html";
var btnAbout = document.getElementById("btnAbout");
var btnProjects = document.getElementById("btnProjects");
var btnBlogs = document.getElementById("btnBlogs");
var btnRubik = document.getElementById("btnRubik");
var btnContact = document.getElementById("btnContact");


var article = document.getElementById("article");

btnAbout.addEventListener("click",clickAbout);

btnBlogs.addEventListener("click",clickBlogs);
btnRubik.addEventListener("click",clickRubik);
btnContact.addEventListener("click",clickContact);



function clickAbout(){
    link = "aboutMe/aboutMe.html";
    loadArticle();
}
function clickProjects(){
    link = "building.html";
    loadArticle();
}
function clickBlogs(){
    link = "blogs/manMoon50th/manMoon50th.html";
    loadArticle();
}
function clickRubik(){
    link = "rubik/rubik.html";
    loadArticle();
}
function clickContact(){
    link = "contact/contact.html";
    loadArticle();
}


function loadArticle(){
    article.src=link;
}


