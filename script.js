
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