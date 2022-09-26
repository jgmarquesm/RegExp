const files = require("./files");

const aplicarCor = (txt, regex, color) =>
    txt.replace(regex, `<span style="color: #${color}"><b>$1</b></span>`);

const texto = files.read("codigoFonte.html");

const codeRegex = /<(code)>[\s\S]*<\/\1>/i;
let codigo = texto.match(codeRegex)[0];

// String
codigo = aplicarCor(texto, /(\".*\")/g, "ce9178");

// Palavras reservadas
codigo = aplicarCor(codigo, /\b(package|public|class|static|if|else)\b/g, "d857cf");

// Tipos
codigo = aplicarCor(codigo, /\b(void|int)\b/g, "1385e2");

// Comentários Multiplas linhas
codigo = aplicarCor(codigo, /(\/\*[\s\S]*\*\/)/g, "267703")

// Comentários Uma linhas
codigo = aplicarCor(codigo, /(\/\/.*?\n)/g, "267703");

const conteudoFinal = texto.replace(codeRegex, codigo);
files.write("codigoFonte.html", conteudoFinal);