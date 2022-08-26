$(document).ready(() => {

    $('section').load('pages/home.html');
    $('#menuHome').addClass('active');

    function clearClass(params) {
        $('#menuHome').removeClass('active');
        $('#menuSobre').removeClass('active');
        $('#menuProdutos').removeClass('active');
        $('#menuContato').removeClass('active');
    }

    $('#menuHome').click(() => {
        clearClass()
        $('#menuHome').addClass('active');
        $('section').load('pages/home.html');
    })

    $('#menuSobre').click(() => {
        clearClass()
        $('#menuSobre').addClass('active');
        $('section').load('pages/sobre.html');
    })

    $('#menuProdutos').click(() => {
        clearClass()
        $('#menuProdutos').addClass('active');
        $('section').load('pages/produtos.html');
    })

    $('#menuContato').click(() => {
        clearClass()
        $('#menuContato').addClass('active');
        $('section').load('pages/contato.html');
    })
    
})  