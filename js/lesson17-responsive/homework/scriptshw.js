let project_items = document.getElementsByClassName("project-item");
for (let i = 0; i < project_items.length; i++) {
  project_items[i].style.height = project_items[0].offsetWidth + "px";
}
//
let slideIndex = 0;
let slider = document.querySelector(".slideshow");
let slides = document.querySelector(".slides");
let slide = document.querySelectorAll(".slide-page");
let dots = document.querySelectorAll(".dot")

showslide();

function plusslide(position) {
    slideIndex += position;

    if (slideIndex > slide.length) {
        slideIndex = 1;
    }
    else if (slideIndex < 1) {
        slideIndex = slide.length;
    }

    // Defaultly active class is removed from all dots
    for (let i = 0; i < dots.length; i++) {
        const element = dots[i];
        element.classList.remove("dot-active");
    }

    slides.style.transform = `translateX(-${slideIndex - 1}00%)`;
    dots[slideIndex - 1].classList.add("dot-active");
}

function currentslide(index) {
    if (index > slide.length) {
        index = 1;
    }
    else if (index < 1) {
        index = slide.length;
    }

    // Defaultly active class is removed from all dots
    for (let i = 0; i < dots.length; i++) {
        const element = dots[i];
        element.classList.remove("dot-active");
    }

    slides.style.transform = `translateX(-${slideIndex - 1}00%)`;
    dots[index - 1].classList.add("dot-active");

    slideIndex = index;
}

function showslide() {
    slideIndex++;

    if (slideIndex > slide.length) {
        slideIndex = 1;
    }
    else if (slideIndex < 1) {
        slideIndex = slide.length;
    }

    // Defaultly active class is removed from all dots
    for (let i = 0; i < dots.length; i++) {
        const element = dots[i];
        element.classList.remove("dot-active");
    }
    slides.style.transform = `translateX(-${slideIndex - 1}00%)`;
    dots[slideIndex - 1].classList.add("dot-active");
}


let interval = setInterval(()=> {
    showslide();
} , 3000);   // Change every image after 3 seconds

slider.addEventListener("mouseover" , ()=> {
    clearInterval(interval);     // onHover Stop Changing every image after 3 seconds 
});

slider.addEventListener("mouseout" , ()=> {
    interval = setInterval(()=> {
        showslide();   
    } , 3000);    // on mouseout from slide then again start Changing every image after 3  seconds 
});

