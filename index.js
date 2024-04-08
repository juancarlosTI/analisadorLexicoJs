/*
Criando um alfabeto de símbolos para um analisador léxico
-----------------------------------------------------------------------------------------------------------
- "^" em /^A/ significa, todas as palavras que comecem com a letra A no inicio da palavra (obrigatoriamente maiúscula).
Exemplo:

/^A/ não corresponde ao 'A' em 'Um Alvo', mas correponde a um 'A' em 'Alvo Encontrado'
-----------------------------------------------------------------------------------------------------------

- "$" em /r$/ significa, todas as palavras que terminem com a letra 'r' (obrigatoriamente minúscula) 

"$" em /r$/ não corresponde ao 'r' em 'corre', mas corresponde um 'r' em 'correr'
-----------------------------------------------------------------------------------------------------------

- "*" em '/bo{*}/' significa, todas as ocorrências do 'bo*', começando pelo b.

"*" em /bo{*}/ corresponde ao 'bo' de boolean, ao 'b' de 'A bird warbled', mas não corresponde ao 'o' em 'A goat grunted'.
-----------------------------------------------------------------------------------------------------------

"+" em "/a+/" significa, todas as ocorrências do 'a'.

"+" em "/a+/" corresponde ao 'a' em 'candy' e todas as ocorrências de 'a' em 'caaaandy', mas nenhuma ocorrência em 'cndy'.

----------------------------------------------------------------------------------------------------------
"?" em /e?le?/, encontra o 'el' em "angel" e o 'le' em "angle" e também o 'l' em "oslo".
Quando usado depois de quaisquer operador, exibe apenas 0 ou 1 repetição da ocorrência.

Por exemplo, em /\d+/ em '123abc', encontra '123'. Mas aplicando /\d+?/, encontra somente '1'.
----------------------------------------------------------------------------------------------------------

"." corresponde a um caractere que precede o elemento da ocorrência. Em "/.n/" acha correspondência para o 'an' e 'on' em "nove dias restantes para onze de agosto.", mas não encontra 'no' em 'nove'.



------------------------------------------------------------------------------------------------------
x(?=y) - Pesquisa correspondência em 'x' apenas se 'x' é seguido por 'y'. Isso é chamado de lookahead.

Por exemplo, /Jack(?=Sprat)/ busca 'Jack' apenas se é seguido por 'Sprat'. /Jack(?=Sprat|Frost)/ busca 'Jack' apenas se ele é seguido por 'Sprat' ou 'Frost'. No entanto, 'Sprat' nem 'Frost' faz parte do resultado retornado.

-------------------------------------------------------------------------------------------------------
Pesquisa correspondência em 'x' apenas se 'x' não é seguido por 'y'. Isso é chamado negação lookahead.

Por exemplo, /\d+(?!\.)/ encontra um número apenas se ele não for seguido por um ponto decimal. A expressão regular /\d+(?!\.)/.exec("3.141") encontra '141' mas não '3.141'.

-------------------------------------------------------------------------------------------------------


*/


/*

Simbolo para o alfabeto:

\/a+/ = Todas as ocorrências da letra 'a'.
/r$/ = Todas as palavras que terminam com 'r'.
/\d+/ = Todos os números isolados (Sem ponto decimal).
/(\bA[a-zA-Z]*\b)/g = Todas as palavras que começam com A (obrigatoriamente maiúsculo)
/(\b[a-zA-Z]{2}\b)/g = Palavras que tem somente 2 letras
/\b[a-zA-Z]\d|\d[a-zA-Z]\b/g = Palavras que tem 1 letra e 1 número
/\b[A-Z]\w*\b/g = Palavras que tem a primeira letra maiúscula
/\b[a-z]+\b/g = Palavras com todas as letras minúsculas
 = 
/(?<=\p{L})\d+(?=\p{L})/gu = Números que estão entre letras
/\b\d+\.\d+\b/g = Todos os números que tem um '.' decimal. Ex: 1.340
 = Operador +
 = Operador -
 = Operador *
 = Operador /
 = Operador for
 = Operador while
 = Operador =
 = Operador if
 = Operador else
 
*/


//Iniciando o programa

const token_patterns = [[/\d+/g,'NUMEROS'],[/\a+/g,"ocorrencias da letra 'a'"],[/b/g,"ocorrencias da letra 'b' "],[/(\b[a-zA-Z]{2}\b)/g,'Palavras com 5 letras'],[/(\bA[a-zA-Z]*\b)/g,'Palavras que começam com A maiúsculo'],[/\b[a-zA-Z]\d|\d[a-zA-Z]\b/g,'Palavras que contem 1 letra e 1 número, ou vice versa'],[/\b\w+\b/g,'Todas as palavras'],[/\b[A-Z]\w*\b/g,'Palavras que começam com letra maiúscula'],[/\b[a-z]+\b/g,'Todas as palavras minúsculas'],[/\b\d+\.\d+\b/g,'Todos os números com . decimal'],[/(?<=\p{L})\d+(?=\p{L})/gu,'Números que estão entre letras'],[/[\p{S}]/gu,'Todos os símbolos unicode']]

//String de entrada

const string = "$";

/* O método .match() é um método de strings usado para encontrar correspondências de uma expressão regular em uma string. Para encontrar os espaços em branco, basta adicionar a expressão regular ao array token_patterns.  */

for (let i = 0; i < token_patterns.length; i++){
    var verificar_token = string.match(token_patterns[i][0])
    console.log(token_patterns[i][1], verificar_token)    
}


// if (verificar_token !== null){
//     for (let i=0;i < verificar_token.length; i++){
//         console.log("Número(s) encontrado(s):", verificar_token);
//     }
    
// } else {
//     console.log("Não existe numeros na string!");
// }

