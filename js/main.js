

document.addEventListener ('DOMContentLoaded', function(){
    //burguer menu
    const burguerMenuBtn = document.querySelector('#burguer-menu-button')

    burguerMenuBtn.addEventListener ( 'click', function () {
        document.body.classList.toggle( 'mobile-menu-active' );

    });

})

