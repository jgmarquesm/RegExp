const emails = `Lista de e-mails dos participantes:
    - pessoa1@gmail.com
    - pessoa_2@discente.ufg.br
    - pessoa+3@live.com
    - pessoa.4@ufg.br
`;

console.log(emails.match(/\S+@\w+\.\w{2,6}(\.\w{2})?/gm));