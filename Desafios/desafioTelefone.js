const tefelones = "000000000000, (11) 11111-1111, 222 2 2222-2222, 33 3 33333333, 444 44444-4444, (55) 5 5555 5555";

const regexTelefone = /\(?\d{0,3}\)?\s?[\d{1}]?\s?\d{4,9}-?\s?\d{4}/g;

console.log(tefelones.match(regexTelefone));