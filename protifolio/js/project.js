let mainColors = localStorage.getItem("color-option");
if (mainColors !== null) {
    document.documentElement.style.setProperty('--main--color', localStorage.getItem("color-option"));    
    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active");
    if (element.dataset.color=== mainColors){
        element.classList.add("active");
    }    
    });
    }
// Click On Toggle Settings Gear    
document.querySelector(".toggle-settings .fa-gear").onclick=function(){

// Toggle class Fa spin For Rotation on self    
this.classList.toggle("fa-spin");
// Toggle class Open on main settings Box
document.querySelector(".settings-box").classList.toggle("open");
}
//////////////////////////////////
//switch colors
const colorsli = document.querySelectorAll(".colors-list li")

//loop on all list items
colorsli.forEach(li => {
//click on every list items
    li.addEventListener("click" , (e) => {
//set color on root         
        document.documentElement.style.setProperty('--main--color', e.target.dataset.color);   
//set color on local storage          
        localStorage.setItem("color-option" , e.target.dataset.color);
        HandleActive(e);
        
    } );

});
//Random Background Option

let backgroundOption= true;



//variable to control the interval
 let backgroundIntrvel;

//check if  there is local storage random background item 
let backgroundlocalitem = localStorage.getItem("background_option");

//check if random background local storage is not empty
if ( backgroundlocalitem !==null){
    if (backgroundlocalitem === "true"){
        backgroundOption= true;
        
    } else{
        backgroundOption= false;
    }
// remove active class from all spam
document.querySelectorAll(".random-backgrounds span").forEach(element =>{
 element.classList.remove("active")
});
if (backgroundlocalitem === 'true'){
    document.querySelector(".random-backgrounds .yes").classList.add("active");
} else{
    document.querySelector(".random-backgrounds .no").classList.add("active");

}
}

/////////////////////////////////////////////////////////
//switch random Background
const randomBackEL = document.querySelectorAll(".random-backgrounds span")

//loop on all span
randomBackEL.forEach(span => {
//click on every span
    span.addEventListener("click" , (e) => {

        HandleActive(e);

        if (e.target.dataset.background === 'yes'){
            backgroundOption= true;
            localStorage.setItem("background_option", true);
        randomizImgs();
        } else {
            backgroundOption = false ;
        clearInterval(backgroundIntrvel);
        localStorage.setItem("background_option", false);
        }
    } );

});
//Function to randomize imgs
function randomizImgs(){

    if ( backgroundOption === true){

        backgroundIntrvel = setInterval(() => {
            let random = Math.floor(Math.random()* ["01.JPG","02.JPG","03.JPG","04.JPG","05.JPG"].length);
        
            document.querySelector(".landing-page").style.backgroundImage = 'url("imgs/' + ["01.JPG","02.JPG","03.JPG","04.JPG","05.JPG"][random] + '")';
        
        }, 1000);
        
    }
}
randomizImgs();


//select skills selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function(){
    // skills offset top
    let skillsOffsetTop= ourSkills.offsetTop;
   
    //skills Outer Height
    let skillsOuterHeight = ourSkills.offsetHeight;
    //window Height
    let WindowHeight = this.innerHeight;
    //window scrolltop
    let windowScrollTOp= this.pageYOffset;

    if (windowScrollTOp > (skillsOffsetTop + skillsOuterHeight - WindowHeight)){

            let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
            allSkills.forEach(skill => {

                skill.style.width = skill.dataset.progress

            });

    }
}
//creat popup with th image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img =>{
    img.addEventListener('click' , (e) => {
        //create overlay elemet 
        let overlay = document.createElement("div");
        //add class 
        overlay.className='popup-overlay';
        //append overlay to the body
        document.body.appendChild(overlay);
        //create the popup
        let popupbox = document.createElement("div");
        //add class to popup
        popupbox.className='popup-box';
        if(img.alt !== null){
            //create Heading
            let imgheading = document.createElement("h3");
            //creat text for headimg 
             let imgText = document.createTextNode(img.alt);
           //append the text to the heading 
           imgheading.appendChild(imgText);
           // append the headimg to the popup
           popupbox.appendChild(imgheading);
                    }
        //create the image
        let popupImage = document.createElement('img')
        // set image src
        popupImage.src= img.src;
        //add image to popup box
        popupbox.appendChild(popupImage);
        //append the popup to body
        document.body.appendChild(popupbox);
        //create the close span 
        let closeButton = document.createElement("span");
        // create the close button text
        let closeText = document.createTextNode("X")
        //append
        closeButton.appendChild(closeText); 
        //add class to close button
        closeButton.className = "Close-button"
        // add close button to the popupbox
        popupbox.appendChild(closeButton);                    
        
    })
})

//close popou
document.addEventListener("click", function (e){
    if(e.target.className == "Close-button"){
      // remove the current popup
        e.target.parentNode.remove();
       // remove overlay
       document.querySelector('.popup-overlay').remove(); 
   }
})

//select all bullets
const allbullets = document.querySelectorAll(".nav-bullets .bullets" );

//select all links
const allinks = document.querySelectorAll(".links a" );

function scrolltosomewhere(elements){

    
    elements.forEach(ele => {
        ele.addEventListener("click", (e) =>{
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'   
            })
        })
    })  

}
scrolltosomewhere(allbullets);
    scrolltosomewhere(allinks);

// Handle Active state

function HandleActive(ev){

    // remove active class from all childrens        
        ev.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        })
//add active class on self        
        ev.target.classList.add("active");

}


let bulletsspan = document.querySelectorAll(".bullets-option span")

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletlocalitem  = localStorage.getItem("bullets-option");

if(bulletlocalitem !== null ){
    console.log('llllllll');
 bulletsspan.forEach(span => {
     span.classList.remove("active");
 });
 if  (bulletlocalitem === 'block'){
     
    bulletsContainer.style.display = 'block';
    document.querySelector(".bullets-option .yes").classList.add("active");
 }else {
    bulletsContainer.style.display = 'none';
    document.querySelector(".bullets-option .no").classList.add("active");
 }

}

bulletsspan.forEach(span => {

    span.addEventListener("click" , (e) => {

        if (span.dataset.display === 'show') {

            bulletsContainer.style.display = 'block';
            localStorage.setItem("bullets-option", 'block');
            
        } else {
            bulletsContainer.style.display = 'none';
            localStorage.setItem("bullets-option", 'none');
        }

        HandleActive(e);
    });
});

// Reset button

document.querySelector(".reset-button").onclick= function(){

    localStorage.clear();
    window.location.reload();
    ///localStorage.removeItem();   
}




let togglebtn = document.querySelector(".toggle-menu");
let tlinks = document.querySelector(".links")

togglebtn.onclick = function(e){
    e.stopPropagation();

    this.classList.toggle("menu-active");

    tlinks.classList.toggle("open");

}

//click anywhere 
document.addEventListener("click", (e) =>{
    if (e.target !== togglebtn && e.target !== tlinks){
        if (tlinks.classList.contains("open")){
            
tlinks.classList.toggle("open")
togglebtn.classList.toggle("menu-active")
        }
    }
})

tlinks.onclick = function(e) {
    e.stopPropagation();
}