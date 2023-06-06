/*  Eu quero fazer um jogo de pedra papel e tesoura
    Nele o o usuario vai jogar contra o computador.
    Serão 5 partidas, sendo que quem ganha a rodada
    é aquele que ganho mais de duas partidas.
    
    As etapas para esse programa funcinar são:
    Pedir o input do usuario.
    Receber um input aleatorio do computador.
    Comparar os paramentros dos inputs do 
    usuario e computador para determinar o 
    vecedor.
    Retornar e guardar quem ganhou a partida.
    Repertir os passos anteriores 5 vezes.
    Com os resultados guardados das partidas aplicar
    os paramentros para decidir o jogador ganhador.*/

function getComputerChoice() {
    const shapes = ["rock", "paper", "scissors"]; 
    const random = Math.floor(Math.random() * shapes.length);
    return shapes[random];
}
  
function playerSelection() {
    return prompt("Rock, Paper or Scissors?").toLowerCase();
}
    
