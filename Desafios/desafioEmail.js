const emails = `Lista de e-mails dos participantes:
    - pessoa1@gmail.com
    - pessoa_2@discente.ufg.br
    - pessoa+3@live.com
    - pessoa.4@ufg.br
`;

const regexEmail = /[\w.+]+@[0-9A-Za-z]+\.[A-Za-z]{2,4}\.?[A-Za-z]{0,4}/g

console.log(emails.match(regexEmail));