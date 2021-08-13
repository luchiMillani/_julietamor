window.addEventListener ('load', function(){ /*SI USO ESTA FUNCION ES NECESARIO UTILIZAR DOMcontentLoad?*/
    const carouselSlide  = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');

    //BOTONES

    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');

    //CONTADOR
    let counter = 1;
    


    //evento btn

    nextBtn.addEventListener('click', ()=>  {
         counter++ ;
    })

    prevBtn.addEventListener('click', ()=>  {
        counter-- ;
    })
    
});

document.addEventListener ('DOMContentLoaded', function(){
    //burguer menu
    const burguerMenuBtn = document.querySelector('#burguer-menu-button')

    burguerMenuBtn.addEventListener ( 'click', function () {
        document.body.classList.toggle( 'mobile-menu-active' );

    });

})

