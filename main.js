let navbar = $('.navbar')

$(window).scroll(function() {
    // console.log(window.innerHeight)
    // console.log($('.section-2').offset().top)
    // let oTop = $('.section-2').offset().top - window.innerHeight
    // console.log(oTop)
    console.log($(window).scrollTop())
        // if ($(window).scrollTop() > oTop) {
    if ($(window).scrollTop() > 80) {
        navbar.addClass('sticky')
    } else {
        navbar.removeClass('sticky')
    }
})