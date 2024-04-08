


const token_patterns = [[/\d+/g,'NUMEROS'],[/\a+/g,"ocorrencias da letra 'a'"],[/b/g,"ocorrencias da letra 'b' "],[/(\b[a-zA-Z]{2}\b)/g,'Palavras com 5 letras'],[/(\bA[a-zA-Z]*\b)/g,'Palavras que começam com A maiúsculo'],[/\b[a-zA-Z]\d|\d[a-zA-Z]\b/g,'Palavras que contem 1 letra e 1 número, ou vice versa'],[/\b\w+\b/g,'Todas as palavras'],[/\b[A-Z]\w*\b/g,'Palavras que começam com letra maiúscula'],[/\b[a-z]+\b/g,'Todas as palavras minúsculas'],[/\b\d+\.\d+\b/g,'Todos os números com . decimal'],[/(?<=\p{L})\d+(?=\p{L})/gu,'Números que estão entre letras'],[/[\p{S}]/gu,'Todos os símbolos unicode']]




function tokenize(code){
    if (typeof code !== 'string') {
        throw new Error('A variável "code" deve ser uma string.');
    }
    console.log(code.length);
    var tokens = [];
    code = code.trim();
    console.log(code)
    console.log(typeof code);
    while (code){
        let match = null
        for (let i = 0; i < token_patterns.length; i++){
               match = code.match(token_patterns[i][0])
               //Não é possivel abrir o objeto match para referenciar os elementos por indice.
               console.log(match);
               if (match){
                    tokens.push(match);
                    console.log('Token: ', match);
                    break;
               }
               if (!match){
                    return `Não foi possível reconhecer o ${code}`
               }
        }

    }return tokens;
}

tokenize("   Aqui está a string, foi mal   ");

//var verificar_token = string.match(token_patterns[i][0])
//            console.log(token_patterns[i][1], verificar_token) 