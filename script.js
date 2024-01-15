

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

/* section-1 image */

const imageContenElement = document.querySelector(".imageConten");

          window.addEventListener("scroll",()=>{

               if(window.pageYOffset >= 700){
                    imageContenElement.classList.add("move")
               }else{
                    imageContenElement.classList.remove("move")
               }
          })