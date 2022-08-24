window.onload = () => {
    let button = document.querySelector("#btn");    
    button.addEventListener("click", calculateMoeda);
}

function calculateMoeda() {

    var real = parseFloat(document.getElementById("real").value);
    var result = (document.getElementById("resultado"));
    var opcao = document.getElementById("opcoes").value;

    // valor das moedas em 24/08/2022 às 11:26 
    var bitcoin = 109.436;
    var dolarAmericano = 5.11;  
    var dolarAustraliano = 3.53;
    var dolarCanadense = 3.93;
    var euro = 5.07;
    var francoSuiço = 5.29;
    var iene = 0.037;
    var libra = 6.02;
    var liraTurca = 0.28;
    var peso = 0.037;
    var renminbi = 0.75;

    switch (opcao) {
        case 'bitcoin':
            document.getElementById("resultado").innerHTML = `R$ ${real} em <b> Bitcoin </b> fica `+ (real/bitcoin).toFixed(2) + " BTC";
            break;
        case 'dolar-america':
            document.getElementById("resultado").innerHTML = `R$ ${real} em <b> Dólar Americano </b> fica `+ (real/dolarAmericano).toFixed(2) + " USD";
            break;
        case 'dolar-australia':
            document.getElementById("resultado").innerHTML = `R$ ${real} em <b> Dólar Australiano </b> fica `+ (real/dolarAustraliano).toFixed(2) + " AUD";
            break;
        case 'dolar-canada': 
            document.getElementById("resultado").innerHTML = `R$ ${real} em <b> Dólar Canadense </b> fica `+ (real/dolarCanadense).toFixed(2) + " CAD";
            break; 
        case 'euro':
            document.getElementById("resultado").innerHTML = `R$ ${real} em <b> Euro </b> fica `+ (real/euro).toFixed(2) + " EUR";
            break;
        case 'franco':
            document.getElementById("resultado").innerHTML = `R$ ${real} em <b> Franco Suíço </b> fica `+ (real/francoSuiço).toFixed(2) + " CHF";
            break;
        case 'iene':
            document.getElementById("resultado").innerHTML = `R$ ${real} em <b> Iene </b> fica `+ (real/iene).toFixed(2) + " JPY";
            break;
        case 'libra':
            document.getElementById("resultado").innerHTML = `R$ ${real} em <b> Libra </b> fica `+ (real/libra).toFixed(2) + " GBP";
            break;    
        case 'lira':
            document.getElementById("resultado").innerHTML = `R$ ${real} em <b> Lira Turca </b> fica `+ (real/liraTurca).toFixed(2) + " TL";
            break;
        case 'peso':
            document.getElementById("resultado").innerHTML = `R$${real} em <b> Pesos </b> fica `+ (real/peso).toFixed(2) + " ARS";
            break;
        case 'renminbi':
            document.getElementById("resultado").innerHTML = `R$ ${real} em <b> Renminbi </b> fica `+ (real/renminbi).toFixed(2) + " RMB";
            break;
    }
}