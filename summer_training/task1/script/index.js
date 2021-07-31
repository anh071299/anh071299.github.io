const menuToggle = $('.header__navbar-toggle');
const toggle = $('.header__icon-list');
$(window).mouseup(function (e) {
    if (!menuToggle.is(e.target) 
        && menuToggle.has(e.target).length === 0) 
    {
        menuToggle.removeClass('is-active');
    }
 
});
toggle.on('click', () => {
    menuToggle.toggleClass('is-active');
})
$('.header__icon-close').on('click', () => {
    menuToggle.toggleClass('is-active');
})