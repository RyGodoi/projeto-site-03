/* Menu-responsivo */
var btnMenu = 0;
$('.menu-container').on('click', function () {
    if (btnMenu == 0) {
        $('.menu-responsivo').css('transform', 'translateX(0%)')/*transform: translateX(-100%);*/
        $('.menu-caixa').css('transform', 'rotate(180deg)') /*transform: rotate(180deg); */
        btnMenu = 1;
    } else if (btnMenu == 1) {
        $('.menu-responsivo').css('transform', 'translateX(-100%)')/*transform: translateX(-100%);*/
        $('.menu-caixa').css('transform', 'rotate(0deg)') /*transform: rotate(0deg); */
        btnMenu = 0;
    } else {
        alert('Alerta: Erro no menu!')
    }

})
/* Fim-Menu-responsivo */

/* Smooth Scrolling */
$(".menu-responsivo a").on("click", function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});
/* Fim-Smooth-Scrolling */

/*Slide-galeria */
$('.slides').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
});
$('.slides-celulares').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
});
/*Fim-Slide-galeria */

var btnForm = document.querySelector('.form form')
var nomeUser = document.querySelector('.form form [name=nome]')
var emailUser = document.querySelector('.form form [name=email]')
var mensagemUser = document.querySelector('.form form [name=mensagem]')

btnForm.addEventListener('submit', event => {
    event.preventDefault();
    alert('Mensagem enviada com sucesso ' + nomeUser.value);
    console.log('funcionou');
    nomeUser.value = ""
    emailUser.value = ""
    mensagemUser.value = ""

})