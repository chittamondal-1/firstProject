

/* images socle start */
const imgContainerEl = document.querySelectorAll(".img-contaner");

let count = 1

setInterval(() => {
    count++;
    let currentElement = document.querySelector(".active")
           currentElement.classList.remove("active");
          

           if(count>imgContainerEl.length){
                imgContainerEl[0].classList.add("active");
                count = 1;
           }else{
            currentElement.nextElementSibling.classList.add("active");
           }
    
}, 5000);

/* nave image socle */


const navbar = document.querySelector(".nve")

     
window.addEventListener("scroll",()=>{

    if(window.pageYOffset >= 350){
          navbar.classList.add("styki")
    }else{
     navbar.classList.remove("styki")
    }

})


/* aection--1 imagesScroll */

const imageContenEle = document.querySelector(".imageConten");
window.addEventListener("scroll",()=>{

     if(window.pageYOffset >=700){
          imageContenEle.classList.add("move")
     
     }else{
          imageContenEle.classList.remove("move")
     }
})

/* section-4 image */

const imageContenElement = document.querySelector(".imga-contaner");

          window.addEventListener("scroll",()=>{

               if(window.pageYOffset >=2700){
                    imageContenElement.classList.add("animation")
               
               }else{
                    imageContenElement.classList.remove("animation")
               }
          })


/* section 4 */

/* section 5 */
const contantsContainer = document.querySelector(".contants-container");
const content = document.querySelectorAll(".content");
const interval = 2000;
const clintWidth = content[1].clientWidth;
 
const firstClone = content[0].cloneNode(true);
const lastClone = content[content.length-1].cloneNode(true);

let index = 1;

firstClone.id = "first-clone";
lastClone.id = "last-clone"

contantsContainer.append(firstClone);

contantsContainer.prepend(lastClone);

function slide(){

 setInterval(() => {
     index++;
     contantsContainer.style.transform = `translateX(-${ clintWidth * (index-1) }px)`
     contantsContainer.style.transition = ".7s";
     
 }, interval);


 contantsContainer.addEventListener("transitionend",()=>{
     const content = document.querySelectorAll(".content");
     if(content[index].id === firstClone.id){
          contantsContainer.style.transition = "none";
          index = 1;
          contantsContainer.style.transform = `translateX(-${ clintWidth * (index-1) }px)`
     }
 })



} 
slide()

   
 /* section-5 end */