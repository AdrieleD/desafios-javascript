/* ******* Resolução #1 - Analisando um jogo de Pedra, papel e tesoura *******

Desenvolva um pequeno programa que consiga ao receber o resultado de um conjunto 
de disputas de "pedra, papel e tesoura" entre dois jogadores, saber qual deles 
venceu mais partidas.

Formato de entrada: 

"SRRSPSRPPRSSSR"

onde:
S = tesoura
R = pedra
P = papel

Formato de saída:

“O jogador X ganhou a disputa por X a Y”
“O jogo empatou”             

*/

let entrada = "SRRSPSRPPRSSSR";
let partidas = (entrada.length / 2);
let placarA = 0;
let placarB = 0;

for(i = 0; i < partidas; i++){
    verificaRegra(entrada[2 * i], entrada[2 * i+1]);
}

if(placarA === placarB) console.log("O jogo empatou");
if(placarA > placarB) console.log("O jogador A ganhou a disputa por "+placarA+" a "+placarB+".");
if(placarB > placarA) console.log("O jogador B ganhou a disputa por "+placarB+" a "+placarA+".");

function verificaRegra(a, b){
    if((a === "R" && b === "S") || (a === "T" && b === "P") || (a === "P" && b === "R")){
        placarA+=1;
    }else if((b === "R" && a === "S") || (b === "T" && a === "P") || (b === "P" && a === "R")){
        placarB+=1;
    }
}