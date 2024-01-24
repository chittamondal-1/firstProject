

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


/* const imgConten2 = document.querySelector("sliding");


window.addEventListener("scroll",()=>{ 

     if(window.pageYOffset >= 2100){

          imgConten2.classList.add("move");
          
     }else{
          imgConten2.classList.remove("move"); 
     }
})  */