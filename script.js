// ================================
// LOADER
// ================================

window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.display = "none";
    }
});

// ================================
// TYPING ANIMATION
// ================================

const words = [
    "AI & ML Student",
    "Web Developer",
    "Python Programmer",
    "Future AI Engineer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const typing = document.querySelector(".typing");

    if (!typing) return;

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typing.textContent = currentWord.substring(0, charIndex++);
    } else {

        typing.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = 120;

    if (!isDeleting && charIndex > currentWord.length) {
        speed = 1500;
        isDeleting = true;
    }

    if (isDeleting && charIndex < 0) {
        isDeleting = false;
        wordIndex++;

        if (wordIndex >= words.length) {
            wordIndex = 0;
        }

        speed = 300;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ================================
// SMOOTH SCROLL
// ================================

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });

    });

});


// ================================
// ACTIVE NAVIGATION
// ================================

window.addEventListener("scroll",()=>{

let sections=document.querySelectorAll("section");
let navLinks=document.querySelectorAll("nav ul li a");

sections.forEach(section=>{

let top=window.scrollY;
let offset=section.offsetTop-150;
let height=section.offsetHeight;
let id=section.getAttribute("id");

if(top>=offset && top<offset+height){

navLinks.forEach(link=>{

link.classList.remove("active");

document.querySelector("nav a[href*="+id+"]").classList.add("active");

});

}

});

});


// ================================
// SCROLL TO TOP BUTTON
// ================================

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText=`
position:fixed;
bottom:25px;
right:25px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#00e5ff;
color:#000;
font-size:22px;
cursor:pointer;
display:none;
box-shadow:0 0 20px #00e5ff;
z-index:999;
`;

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// ================================
// HERO IMAGE ANIMATION
// ================================

const heroImage=document.querySelector(".hero-image img");

if(heroImage){

heroImage.addEventListener("mouseover",()=>{

heroImage.style.transform="scale(1.08) rotate(2deg)";

});

heroImage.addEventListener("mouseout",()=>{

heroImage.style.transform="scale(1)";

});

}