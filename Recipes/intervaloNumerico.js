const numeros = "0 1 10 192 199 201 249 255 256 312 1010 1012 1024 2048";

const regexIntervalosNumericos = /\b(\d{1,2}|1\d{2}|2[0-4][0-9]|25[0-5])\b/g;

console.log(numeros.match(regexIntervalosNumericos));