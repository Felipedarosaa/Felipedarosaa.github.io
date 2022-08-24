window.onload = () => {
    let button = document.querySelector("#btn");
  
    // Função para calcular o IMC
    button.addEventListener("click", calculateBMI);
};
  
function calculateBMI() {

    /* Obtendo entrada do usuário na variável de altura.
    A entrada é uma string, portanto, a conversão de tipos é necessária. */
    let altura = parseInt(document.querySelector("#altura").value);
  
    /* Obtendo entrada do usuário na variável de peso.
    A entrada é uma string, portanto, a conversão de tipos é necessária.*/
    let peso = parseInt(document.querySelector("#peso").value);
  
    let result = document.querySelector("#resultado");
  
    // Verificando o usuário fornecendo um
    // valor ou não
    if (altura === "" || isNaN(altura)) 
        result.innerHTML = "Digite uma altura válida!";
  
    else if (peso === "" || isNaN(peso)) 
        result.innerHTML = "Digite um peso válido!";
  
    // Se ambas as entradas forem válidas, calcule o IMC
    else {
        // Corrigindo até 2 casas decimais  
        let imc = (peso / ((altura * altura) / 10000)).toFixed(2);
  
        // Dividindo de acordo com as condições do bmi
        if (imc < 18.6) result.innerHTML = `Abaixo do Peso! <br> <b> IMC: <span>${imc}</span></b>`;
  
        else if (imc >= 18.6 && imc < 24.9) {
            result.innerHTML =  `Peso médio! <br> <b>IMC: <span>${imc}</span></b>`;
        }
        else if(imc > 24.9 && imc < 30) {
            result.innerHTML = `Excesso de Peso! <br> <b>IMC: <span> ${imc}</span></b>`;
        }
  
        else {
            result.innerHTML = `Obesidade! <br> <b> IMC: <span>${imc}</span></b>`;
    }
    }
}