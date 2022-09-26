// Cuidado com tab
console.log("	".match(/\s/g));

// Forma literal 
const textoLiteral = "Casa bonita é a casa amarela da esquina com a Rua ACASALAR";
const regexLiteral = /a b/gi;
console.log(textoLiteral.match(regexLiteral));

// Caracteres Simples
const textoCaracterSimples1 = "1,2,3,4,5,a,b,c.d e!?f";

const regexVirgula = /,/;
console.log(textoCaracterSimples1.split(regexVirgula));
console.log(textoCaracterSimples1.match(regexVirgula));

console.log(textoCaracterSimples1.match(/,/g));
console.log(textoCaracterSimples1.match(/A/g));
console.log(textoCaracterSimples1.match(/A/gi));

// -------------------------------------------------------------------
// Meta-Caracteres

const textoMetaChar1 = textoCaracterSimples1;

// Escape

const regexPontoLiteral = /\./;
console.log(textoMetaChar1.split(regexPontoLiteral));

const regexSimbolosLiterais = /,|\.|\?|!| /;
console.log(textoMetaChar1.split(regexSimbolosLiterais));

// Ponto

const notas = "10.0, 7.3, 8.2, 5.9, 7.7, 9.3, 8.5"

console.log(textoMetaChar1.match(/1.2/g))
console.log(textoMetaChar1.match(/1..2/g))
console.log(textoMetaChar1.match(/1..,/g))
console.log(notas.match(/8../g))
console.log(notas.match(/.\../g))
console.log(notas.match(/..\../g))

// Problema com meta caracter .: não reconhece o \n.

// Caracteres em branco
const textoMetaCharBranco = `c	ar
r o
s
velo
z	es!
`;
console.log(textoMetaCharBranco.match(/c\tar\nr o\ns\nvelo\nz\tes!\n/g));

// Pipe - OU
const textoMetaOU = "Vocẽ precisa responder: sim, não ou nao sei."
const regexMetaOU = /sim|n.o sei|n.o/g;
console.log(textoMetaOU.match(regexMetaOU));

// Caracteres Unicode - https://unicode-table.com/pt/
const textoUnicode = "aʬc௵d";
const regexUnicode = /\u02AC|\u0BF5/g;
console.log(textoUnicode.match(regexUnicode))

// -------------------------------------------------------------------