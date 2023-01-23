const demo1 = document.getElementById("demo1");
const demo2 = document.getElementById("demo2");
demo2.style.display = "none" ;
const demo3 = document.getElementById("demo3");
demo3.style.display = "none" ;
const demo4 = document.getElementById("demo4");
demo4.style.display = "none" ;
const demo5 = document.getElementById("demo5");
demo5.style.display = "none" ;
const demo6 = document.getElementById("demo6");
demo6.style.display = "none" ;
const demo7 = document.getElementById("demo7");
demo7.style.display = "none" ;
const Photo = document.getElementById("Photo");
const vid = document.getElementById("vid");
const Text1 = document.getElementById("Text");
const Article = document.getElementById("Article");
const SM = document.getElementById("SM");
const models = document.getElementById("models");
const contact = document.getElementById("contact");

Photo.onclick = function(){
    demo1.style.display = "" ;
    demo2.style.display = "none" ;
    demo3.style.display = "none" ;
    demo4.style.display = "none" ;
    demo5.style.display = "none" ;
    demo6.style.display = "none" ;
    demo7.style.display = "none" ;
}

vid.onclick = function(){
    demo1.style.display = "none" ;
    demo2.style.display = "" ;
    demo3.style.display = "none" ;
    demo4.style.display = "none" ;
    demo5.style.display = "none" ;
    demo6.style.display = "none" ;
    demo7.style.display = "none" ;
}



Text1.onclick = function(){
    demo1.style.display = "none" ;
    demo2.style.display = "none" ;
    demo3.style.display = "" ;
    demo4.style.display = "none" ;
    demo5.style.display = "none" ;
    demo6.style.display = "none" ;
    demo7.style.display = "none" ;
}
Article.onclick = function(){
    demo1.style.display = "none" ;
    demo2.style.display = "none" ;
    demo3.style.display = "none" ;
    demo4.style.display = "" ;
    demo5.style.display = "none" ;
    demo6.style.display = "none" ;
    demo7.style.display = "none" ;
}

SM.onclick = function(){
    demo1.style.display = "none" ;
    demo2.style.display = "none" ;
    demo3.style.display = "none" ;
    demo4.style.display = "none" ;
    demo5.style.display = "" ;
    demo6.style.display = "none" ;
    demo7.style.display = "none" ;
}

models.onclick = function(){
    demo1.style.display = "none" ;
    demo2.style.display = "none" ;
    demo3.style.display = "none" ;
    demo4.style.display = "none" ;
    demo5.style.display = "none" ;
    demo6.style.display = "" ;
    demo7.style.display = "none" ;
}

contact.onclick = function(){
    demo1.style.display = "none" ;
    demo2.style.display = "none" ;
    demo3.style.display = "none" ;
    demo4.style.display = "none" ;
    demo5.style.display = "none" ;
    demo6.style.display = "none" ;
    demo7.style.display = "" ;
}




function validate(){
    var tname = document.getElementById("tname").value;
    var tcode = document.getElementById("tcode").value;
    var tpass = document.getElementById("tpass").value;
if (tname == "guest"&& tcode == "guest" && tpass == "guest") {
    alert("Enterd guest mode")
}
}
const tdet = document.getElementById("tdet");
tdet.style.display = "none"
const readmore = document.getElementById("readmore");
readmore.onclick = function(){
    readmore.style.display = "none";
    tdet.style.display = "";
}
tdet.onclick = function(){
    readmore.style.display = "";
    tdet.style.display = "none";
}