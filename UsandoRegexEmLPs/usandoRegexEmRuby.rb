texto = "0, 1, 2, a, B, c, @, _, $, #, d, 3, E, f, 4, 5, !, %"

# Podemos escrever uma regex da seguinte maneira:
# regexCinco = Regexp::new("5")
# Também podemos usar a seguinte definição:
regexCinco = %r{5}

puts "regex.match(string) -> regexCinco.match(texto): %s" % [regexCinco.match(texto)]

# Podemos fazer uma verificação semelhante ao RegExp.search() do JS usando o operador =~:
puts "regex =~ string -> regexCinco =~ texto: %d" % [regexCinco =~ texto]

# Mas também podemos criar Regex usando as /.../ assim com no JS:
regexLetras = /[a-f]/i

# Procura no texto todas as ocorrências
puts "string.scan(regex) -> texto.scan(regexLetras): %s" % [texto.scan(regexLetras)]

#
puts "string.split(regex) -> texto.split(regexLetras): %s" % [texto.split(regexLetras)]
