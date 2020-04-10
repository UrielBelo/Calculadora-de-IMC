
function verificar(){
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    imc= (peso/(altura*altura))
    resultado.innerHTML= "Seu IMC é igual a: " + imc.toFixed(1)
     if(imc<10){
         classificacao.innerHTML= "Portanto, você está com desnutrição de grau V"
         classificacao.style.backgroundColor= "red"
     }
     if(imc<12,9){
         classificacao.innerHTML= "Pontanto, você está com desnutrição de grau IV"
         classificacao.style.backgroundColor= "red"
     }
     if(imc<15,9){
         classificacao.innerHTML= "Portanto, você está com desnutrição de grau III"
         classificacao.style.backgroundColor= "red"
     }
     if(imc<16,9){
         classificacao.innerHTML= "Portanto, você está com desnutrição de grau II"
         classificacao.style.backgroundColor= "red"
     }
     if(imc<18,4){
         classificacao.innerHTML= "Portanto, você está com desnutrição de grau I"
         classificacao.style.backgroundColor= "red"
     }
     if(imc<24,9){
         classificacao.innerHTML= "Portanto, você está com o nível de peso normalizado(ideal)"
         classificacao.style.backgroundColor= "green"
     }
     if(imc>25){
         classificacao.innerHTML= "Portanto, você está com princípio de Obesidade"
         classificacao.style.backgroundColor= "darkgreen"
     }
     if(imc>30){
         classificacao.innerHTML= "Portanto, você está com obesidade de grau I"
         classificacao.style.backgroundColor= "red"
     }
     if(imc>35){
         classificacao.innerHTML= "Portanto, você está com obesidade de grau II"
         classificacao.style.backgroundColor= "red"
     }
     if(imc>40){
         classificacao.innerHTML= "Portanto, você está com obesidade de grau III"
         classificacao.style.backgroundColor= "red"
     }
}

