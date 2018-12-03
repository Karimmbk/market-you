
// script para dar scroll suave quando clica na section no menu
$('.menu a').on('click', function(e) { // nos elementos do menu quando clicar
  e.preventDefault(); // primeiro dar prevent default para tirar a acao q ja faz
  var id = $(this).attr('href'), // variavel para pegar o id no href do elemento clicado no menu
      menuHeight = $('.menu').innerHeight(), // calcular altura do menu e somar 20
      targetOffset = $(id).offset().top // calcular a altura do topo ate a section correspondente
  $('html, body').animate({ // animar o scroll lentamente
    scrollTop: targetOffset - menuHeight // fazer o calculo para mostrar onde vai parar
  }, 500); // velocidade do scroll
});

// funcao para ativar a secao selecionada e mudar a cor
$('section').each(function() {
  var height = $(this).height(),
      offsetTop = $(this).offset().top,
      id = $(this).attr('id'),
      $itemMenu = $('a[href="#' + id + '"]');
      // console.log('id = ' + id);
      // console.log("height = " + height);
      // console.log("offsetTop = " + offsetTop);
      // console.log( $itemMenu);
  $(window).scroll(function () { 
    var scrollTop = $(this).scrollTop();
    if(offsetTop - 100 < (scrollTop) && (offsetTop + height - 100) > scrollTop) {
      $itemMenu.addClass('active');
    }
    else {
      $itemMenu.removeClass('active');
    }
  });
});




// funcao para mudar a cor do fundo do menu quando scroll
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top"); // pegando a classe para fazer a conta
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height()); // add e removendo a classe scrolled conforme o calculo em relacao ao topo e ao tamanho do menu
  });
});
