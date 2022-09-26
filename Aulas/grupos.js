const texto1 = "E o Coringa sorriu drmaticamente: HAHAHAHAHAHAHAHAHAHA";
regexGrupos1 = /(ha)+/gi;

console.log(texto1.match(regexGrupos1));

const urls = `
https://www.if.ufg.br,
https://github.com,
google.com,
http://www.site.info.eu
`;
regexUrl = /(https?\:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2,})?/g;

console.log(urls.match(regexUrl));

// Retrovisores
const htmlElement = "<b>Destaques</b><strong>Forte</strong><div>Conteúdo</div>";
regexExemploRetro = /<(\w+)>.*<\/\1>/g;

console.log(htmlElement.match(regexExemploRetro));

const texto2 = "Lentamente é uma mente muito lenta.";
const regexRetro2 = /(lenta)(mente).*\2.*\1\./gi;

console.log(texto2.match(regexRetro2))

// Replace usando retrovisores

const textoReplace = texto2;
const regexExemploReplace = /(lenta)(mente)/gi

console.log(textoReplace.replace(regexExemploReplace, '$2'))

// Não armazenando o valor do match - ?: antes da definição do grupo

const texto3 = "Lentamente é uma mente muito lenta.";
const regexRetro3 = /(?:lenta)(mente)?.*\1/gi;

console.log(texto3.match(regexRetro3))

// Grupos Aninhados

const textoAninhados = "Supermercado, Hipermercado, Minimercado, Mercado";

// const regexGruposAninhados = /(super|hiper|mini)?mercado/gi;
const regexGruposAninhados = /((hi|su)per|mini)?mercado/gi;


console.log(textoAninhados.match(regexGruposAninhados));

/* Alguns cuidados como uso de grupos
    - Dentro de um Conjunto os Grupos não existem
    - 
*/
const textoCuidadosGrupos = "Pedrinho (filho de Silvia) é doutor do ABCabc";

console.log(textoCuidadosGrupos.match(/[(abc)]/gi)); // Dentro de um Conjunto os Grupos não existem
console.log(textoCuidadosGrupos.match(/([abc])/gi)); // Possível e pega as letras
console.log(textoCuidadosGrupos.match(/(abc)/gi)); // Possível e pega os grupos formados
console.log(textoCuidadosGrupos.match(/(abc)+/gi)); // Possível e pega o grupo formado