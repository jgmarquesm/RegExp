const texto1 = "De long eu avistei o fogo e um pessoa gritando: FOGOOOOOO!";
const texto2 = "There is a big fog in NYCity.";

// Forma Gulosa (Greedy) (Pega o máximo possível do texto)

// ? -> Zero ou Um
const regex01 = /fogo?/gi;

console.log(texto1.match(regex01));
console.log(texto2.match(regex01));

// * -> Zero ou Mais
const regex0mais = /fogo*/gi;

console.log(texto1.match(regex0mais));
console.log(texto2.match(regex0mais));

// + -> Um ou Mais
const regex1mais = /fogo+/gi;

console.log(texto1.match(regex1mais));
console.log(texto2.match(regex1mais));

// {n} -> exatamente n
const regexn = /fogo{1}/gi;

console.log(texto1.match(regexn));
console.log(texto2.match(regexn));

// {n,m} -> De n a m
const regexnam = /fogo{0,3}/gi;

console.log(texto1.match(regexnam));
console.log(texto2.match(regexnam));

// Forma Não Gulosa (Lazy) (Pega o minimo possível do texto)

// ? -> Zero ou Um
const regex01ng = /fogo??/gi;

console.log(texto1.match(regex01ng));
console.log(texto2.match(regex01));

// * -> Zero ou Mais
const regex0maisng = /fogo*?/gi;

console.log(texto1.match(regex0maisng));
console.log(texto2.match(regex0maisng));

// + -> Um ou Mais
const regex1maisng = /fogo+?/gi;

console.log(texto1.match(regex1maisng));
console.log(texto2.match(regex1maisng));

// {n} -> exatamente n
const regexnng = /fogo{1}?/gi;

console.log(texto1.match(regexnng));
console.log(texto2.match(regexnng));

// {n,m} -> De n a m
const regexnamng = /fogo{0,3}?/gi;

console.log(texto1.match(regexnamng));
console.log(texto2.match(regexnamng));