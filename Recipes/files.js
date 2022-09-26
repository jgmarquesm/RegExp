const fs = require("fs");

const read = caminhoRelativo => fs.readFileSync(`${__dirname}/originais/${caminhoRelativo}`, {encoding: "utf8"}); 

function