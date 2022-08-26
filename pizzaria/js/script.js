function pedido() {
    document.getElementById('#botao').innerHTML=alert('Pedido Enviado!');
}

function avaliacao() {
  document.getElementById('#botao').innerHTML=alert('Obrigado pela Avaliação!');
}


var stars = document.querySelectorAll('.star-icon');           
document.addEventListener('click', function(e){
  var classStar = e.target.classList;
  if(!classStar.contains('ativo')){
    stars.forEach(function(star){
      star.classList.remove('ativo');
    });
    classStar.add('ativo');
    console.log(e.target.getAttribute('data-avaliacao'));
  }
});