/*
var

const 

let
regras
uma variável NÃO PODE TER
espaços, começar com numero, acentuação, nem usar palavras chaves de linguagem
*/

let nome = "rodrigo faustino" 
nome = "joao da silva "
console.log(nome)

let idade = 35
let idade2 = "35"
const iguais = idade == idade2
console.log(typeof idade)
console.log(typeof idade2)
console.log(iguais)

//variáveis compostas
//array e objetos
// []       {} 

// const listaDeFrutas = [
//     "abacaxi", 
//     "laranja", 
//     "uva"
// ]
// console.log (typeof listaDeFrutas)
// console.log (listaDeFrutas[5]) 

// listaDeFrutas.push("banana")

// console.log(listaDeFrutas)

// listaDeFrutas.pop()

// console.log(listaDeFrutas)

// listaDeFrutas.shift()

// console.log(listaDeFrutas)

// listaDeFrutas.unshift("manga")

// console.log(listaDeFrutas)

const pessoas = [25, 36, 32, 45, 66, 68, 24, 62, 53]
const fila = []
//if = se
//else = senão

/*
loop é um ciclo de perguntas
for = para 

*/
pessoas.sort()
const tamanho = pessoas.length
// 1º posição variavel
// 2º posição pergunta condicional
// 3º posição incrementoou decremento
for (let i = 0 ; i < tamanho ; i++ ){
    const reposta = pessoas[i] >= 65
    if(reposta){
        fila.unshift(pessoas[i])
    }else{
        fila.push(pessoas[i])
    }
}

console.log(fila)


//objetos
//{}
//dicionário

const pessoa = {
    "nome": "rodrigo faustino"
}

console.log(pessoa)
pessoa.idade = 42
pessoa.vivo = true


const pessoa2 = {
    "nome": "mateus",
    "idade": 17,
    "vivo": true
}

console.log(pessoa2)
const pessoa3 = {
    "nome": "brenda",
    "idade": 18,
    "vivo": true
}
console.log(pessoa3)

console.log(fila)
for(let i = 0 ; i < tamanho ; i++){
    fila.pop()
}
console.log(fila)

pessoa.votos = 2
pessoa2.votos = 5
pessoa3.votos = 5

fila.push(pessoa)
fila.push(pessoa2)
fila.push(pessoa3)
console.log(fila)

console.log(fila[2])
console.log(`Quantidade de votos: ${fila[2].votos}`)







