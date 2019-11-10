/* ******* Resolucão #2 - Jogo da Velha *******

Desenvolva um pequeno programa que consiga ao receber um placar de joga da velha 
(completo ou incompleto) analisar se um dos jogadores venceu ou se houve um empate.

Formato de entrada: 

[['X', 'O', 'O'],
['X', 'X', 'O'],
['O', 'X', 'O']]

Formato de saída:

"O vencedor é o jogador que usou X"
"O jogo não possui vencedor"

*/

let entrada = [
['X', 'O', 'O'],
['X', 'X', 'X'],
['O', 'O', 'O']];

let vencedor = retornaVencedor(entrada);

if(vencedor){
    console.log("O vencedor é o jogador que usou "+vencedor);
} else{
    console.log("O jogo não possui vencedor");
}

function retornaVencedor(entrada){
    for(i = 0; i < entrada.length; i++){
        if(entrada[i].every(v => v === entrada[i][0] && v != ''))
            return entrada[i][0];  
    }

    for(i = 0; i < entrada.length; i++){
        if(entrada[0][i] === entrada[1][i] && entrada[1][i] === entrada[2][i] && entrada[0][i] != '')
            return entrada[0][i];
    }

    if(entrada[0][0] === entrada[1][1] && entrada[1][1] === entrada[2][2] && entrada[0][0] != '')
        return entrada[0][0];
    if(entrada[0][2] === entrada[1][1] && entrada[1][1] === entrada[2][0] && entrada[0][2] != '')
        return entrada[0][2];   

    return false;
}