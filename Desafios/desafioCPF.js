const cpfs = ` CPFs válidos:
    - 000.000.000-00
    - 11111111111
    - 222.222222-22
    - 333333333-33
`;

regexCPF = /\d{3}\.?\d{3}\.?\d{3}\.?-?\d{2}/g;

console.log(cpfs.match(regexCPF));