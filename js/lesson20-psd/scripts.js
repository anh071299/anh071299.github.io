let header = document.querySelector(".header");
let headerNav = document.querySelector(".headerNav");
let headerHeight = header.offsetHeight;
window.addEventListener("scroll", function(ev){
    if((window.pageYOffset > 206)){
        header.classList.add('bg-header-scroll');
        headerNav.classList.add('padding-scroll');
    }else{
        header.classList.remove('bg-header-scroll');
        headerNav.classList.remove('padding-scroll')
    }
});