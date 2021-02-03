// 3 tipos de escopos: global, função e bloco
var serie = 'Friends'

//bloco
if(true){
    var serie2 = 'himym'
    console.log(serie)
}

//função
function x(){
    var serie3 = 'ST'
    console.log(serie)
}
x()

//global
console.log(serie2)
console.log(serie3)