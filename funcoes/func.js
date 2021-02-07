/*let lar = prompt('Informe a largura do terreno')
let comp = prompt('Informe o comprimento do terreno')

function calcularArea(lar,comp){
    let area = lar * comp
    return area
}

let area = calcularArea(lar, comp)
document.write('A área do terreno é ' + area)

//caso eu não defina que, se B = undefined, considera a soma como NaN 
function sum(a, b){
   if(b === undefined){
        b = 0
    }
    return a + b
}
console.log(sum(4,5))
console.log(sum(4,5,6))
console.log(sum(4))
console.log(sum()) */




function calcImc(alt, pes){
    let thisCalc = pes / (alt * alt)
    return thisCalc
    //função precisa retornar para poder ser chamada em outro momento, do contrario é undefined
}
// Ou poderia declarar uma variavel simples, inves de fazer a função
//let imc = pes / (alt *alt)
let alt = document.getElementById('alt')
let pes = document.getElementById('pes')

//quando for chamar a função, como o exemplo abaixo, é preciso declarar os 
//valores das suas variaveis, ou as váriaveis que contem esse valor
let imc = calcImc(alt, pes)

function calcFinal(imc){
     if (imc < 16) return 'Peso baixo muito grave'
     if(imc >= 16 && imc <= 16.99) return 'Peso baixo grave'
     if(imc >= 17 && imc <= 18.49) return 'Baixo Peso'
     if(imc >= 18.5 && imc <= 24.99) return 'Peso normal' 
     if(imc >= 25 && imc <= 29.99) return 'Sobrepeso'
     if(imc >= 30 & imc <= 34.99) return 'Obesidade grau I'
     if(imc >= 35 && imc <= 39.99) return 'Obesidade grau II'
     if(imc >= 40) return 'Obesidade grau III'
        
}
postMessage(calcFinal(imc))