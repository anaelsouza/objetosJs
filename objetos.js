let jogador = {
    nome: 'Anael Souza',
    idade: 20,
    numGol:81,
    Gol(g=0){
        console.log('Anael fez gol!')
        this.numGol += g
    }
}

console.log(jogador.nome)
console.log(jogador.numGol)
jogador.Gol(2)
console.log(jogador.numGol)