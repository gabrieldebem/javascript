let lar = prompt('Informe a largura do terreno')
let comp = prompt('Informe o comprimento do terreno')

function calcularArea(lar,comp){
    let area = lar * comp
    return area
}

let area = calcularArea(lar, comp)
document.write('A área do terreno é ' + area)

/*function sum(a, b){
   if(b === undefined){
        b = 0
    }
    return a + b
}
console.log(sum(4,5))
console.log(sum(4,5,6))
console.log(sum(4))
console.log(sum()) */