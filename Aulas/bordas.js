const textoBordas1 = "Romario era um execelente jogador\n e hoje é um político questionador";
const textoMultilines = `
Leo é muito legal
Emanuel foi jogar em Sergipe
Bianca é casada com Habib
`
const textoBordas2 = "dia, diatônico, diafragma, média, wikipedia, bom-dia, melodia, radial";

const regexDotall = /^r[\s\S]*r$/gi

console.log(textoBordas1.match(/^r/gi)); // Inicio de linha
console.log(textoBordas1.match(/r$/gi)); // Final de linha
console.log(textoBordas1.match(/^r.*r$/gi)); // Problema do dotall. -> [\s\S]
console.log(textoBordas1.match(regexDotall)); // Problema do dotall: Resolvido.

const regexMultiline = /^(\w).+\1$/gim

console.log(textoMultilines.match(/\n/g)); // Quantas quebras de linha tem
console.log(textoMultilines.match(/^(\w).+\1$/gi)); // Não pega pois nẽo é multiline
console.log(textoMultilines.match(regexMultiline));

console.log(textoBordas2.match(/\bdia[\wÀ-ü]*/gi));
console.log(textoBordas2.match(/[\wÀ-ü]*dia\b/gi));
console.log(textoBordas2.match(/[\wÀ-ü]*dia[\wÀ-ü]*/gi));
console.log(textoBordas2.match(/\bdia\b/gi)); // Problemas quando passamos da tabela ASCII para Unicode
console.log(textoBordas2.match(/(\S*)?dia(\S*)?/gi)); // Pega as vírgulas
console.log(textoBordas2.match(/([\wÀ-ü-]*)?dia([\wÀ-ü-]*)?/gi)); // Alternativa de bordas para textos com acentuação