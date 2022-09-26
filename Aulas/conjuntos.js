// Cuidados com intervalos

const textoCuidados = "ABC [abc] a-c 1234";
console.log(textoCuidados.match(/[a-c]/g));
console.log(textoCuidados.match(/a-c/g)); // Não define um range
console.log(textoCuidados.match(/[0-z]/g)); // Usa o intervalo da tabela unicode
// console.log(textoCuidados.match(/[a-Z]/g)); ERRO pois deve respeitar a ordem da tabela unicode
console.log(textoCuidados.match(/[Z-a]/g));

// ----------------------------------------------------
// Trabalhando com Conjuntos
const textoConj1 = "1,2,3,4,5,6,a,b,c.d e!?f[g";
const textoConj2 = "João não vai passear na moto."

const regexPares = /02468/g;
const regexConjPares = /[02468]/g;
const regexComESemAcento = /n[aã]o?/g;

console.log(textoConj1.match(regexPares));
console.log(textoConj1.match(regexConjPares));
console.log(textoConj2.match(regexComESemAcento));

// ----------------------------------------------------
// Intervalos

const textoInterval1 = textoConj1;
console.log(textoInterval1.match(/[a-z]/g))
console.log(textoInterval1.match(/[b-d]/g))
console.log(textoInterval1.match(/[0-9]/g))
console.log(textoInterval1.match(/[2-4]/g))
console.log(textoInterval1.match(/[a-z0-9]/g))
console.log(textoInterval1.match(/[b-d2-4]/g))

// ----------------------------------------------------
// MetaChar em conjuntos -> A maiorida se tornam valores literais com algumas excessões,
// por exemplo: ^ pois ele nega o conjunto, - entre chars pois define um intervalo. 

const texto = ".$+*?-";
console.log(texto.match(/[+.?*$-]/g)); // Funciona como valores literais 
console.log(texto.match(/[+.?*$]./g)); // Fora do conjunto, funciona como metachar
console.log(texto.match(/[$-]/g)) // Não define um intervalo
console.log(texto.match(/[-?]/g)) // Não define um intervalo
console.log(texto.match(/[$\-?]/g)) // Não define um intervalo - Forçamos o uso do literal
console.log(texto.match(/[$-?]/g)) // Define um intervalo

// ----------------------------------------------------
// Shorthands

const textoShortHands = `1,2,3,4,5,6,a,b,c.d e!?f[g	-
	 h_i`;

console.log(textoShortHands.match(/\d/g)); // [0-9]
console.log(textoShortHands.match(/\D/g)); // [^0-9]
console.log(textoShortHands.match(/\w/g)); // [0-9A-Za-z_]
console.log(textoShortHands.match(/\W/g)); // [^0-9A-Za-z_]

// ----------------------------------------------------
// Conjuntos negados - Deve ser sempre colocado no início.
// Para o circunflexo não ser a negação dentro do conjunto, pode-se usar em outra posição que não a primeira ou usar o escape(\).

const textoNegados = "1,2,3,4,5,6,a,b,c.d e!?f[g";

console.log(textoNegados.match(/\D/g));
console.log(textoNegados.match(/[^0-9]/g));
console.log(textoNegados.match(/\W/g));
console.log(textoNegados.match(/[^0-9A-Za-z]/g));
console.log(textoNegados.match(/[^\d!\?\[\s,\.]/g)); // Seleciona apenas as letras.

const textoEstranho = '1: !"#$%&\'()*+,-./ 2: :;<=>?@'; // Ordenados pela tabela ASCII

console.log(textoEstranho.match(/[^!-/:-@\s]/g));

// ----------------------------------------------------
// Intervalos Unicode

const textoIntervaloUnicode = "áéíóú ÁÉÍÓÚ àèìòù ÀÈÌÒÙ âêîôû ÂÊÎÔÛ ç Ç ãõ ÃÕ ü Ü";
console.log(textoIntervaloUnicode.match(/[À-ü\w]/g)); // Pega toda acentuação de PT-BR