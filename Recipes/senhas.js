// Letras maiúsculas, minúsculas, número e símbolo. Entre 6 e 20 chars.

const texto = `
123456
cod3r
QUASE123!
#OpA1
#EssaSenhaEGrande1234
#OpA1?
Foi123!
`;

// Primeira versão
console.log(texto.match(/^.{6,20}$/gm));

// Segunda versão
console.log(texto.match(/^(?=.*[A-Z]).{6,20}$/gm));

// Terceira versão
console.log(texto.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[@#$%&*!-+^&*]).{6,20}$/gm));