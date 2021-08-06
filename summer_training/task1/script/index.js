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

$('ul.main__economic-tabs li a').click(function(){
    $this = $(this);
    $('.main__economic-tab-content').hide();
    $('ul.main__economic-tabs li a').removeClass('active');
    $this.addClass('active');
    var panel = $this.attr('href');
    $(panel).show();
    return false;
  });//end click
  $('ul.main__economic-tabs li:first a').click();