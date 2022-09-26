const texto = "0, 1, 2, a, B, c, @, _, $, #, d, 3, E, f, 4, 5, !, %";

const regexCinco = RegExp("5");

console.log("Métodos da RegExp():");

// Retorna um boolean: `true` se houver o padrão da regex no texto passado.
console.log(`RegExp.test() -> regexCinco.test(texto): ${regexCinco.test(texto)}`);

// Executa a regex no texto passado como argumento.
console.log(`RegExp.exec() -> regexCinco.exec(texto): ${regexCinco.exec(texto)}`);

const regexLetras = /[a-f]/gi
console.log("\nMétodos da string:");

// Retorna os matches da regex no texto 
console.log(`string.match(regex) -> texto.match(regexLetras): ${texto.match(regexLetras)}`);

// Retorna o índice da primeira ocorrência do padrão da regex no texto
console.log(`string.search(regex) -> texto.search(regexLetras): ${texto.search(regexLetras)}`);

// Faz o replace de todas as ocorrências pela segunda string passada
console.log(`string.replace(regex, novaString) -> texto.replace(regexLetras, "Achei"): ${texto.replace(regexLetras, "Achei")}`);

// Gera um array a partir da string passada. A regex entra como o separador, sempre que o padrão bate, é separado um elemento pro array
console.log(`texto.split(regex) -> texto.split(regexLetras): ${texto.split(regexLetras)}`)