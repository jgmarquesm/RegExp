# Grupos Especiais
# Positive Lookahead  - Suportado pelo JS
# Negative Lookahead  - Suportado pelo JS
# Positive Lookbehind - Não suportado pelo JS
# Negative Lookbehind - Não suportado pelo JS

texto1 = "João é calmo, mas no transito fica nervoso."
texto2 = "supermercado superação e HIPERMERCADO Mercado"

# Positive Lookahead - Match apenas no que tem o que foi passado no grupo (?=) antes de
puts "texto1.scan(/[\wÀ-ü.\,]+(?=,)/i): %s" % [texto1.scan(/[\wÀ-ü.\,]+(?=,)/i).join("; ")]
puts "texto1.scan(/[\wÀ-ü.\,]+(?=\.)/i): %s" % [texto1.scan(/[\wÀ-ü.\,]+(?=\.)/i).join("; ")]

# Negative Lookahead - Match no que não tem o que foi passado no grupo (?!) antes de
puts "texto1.scan(/[\wÀ-ü.\,]+\b(?!,)/i): %s" % [texto1.scan(/[\wÀ-ü.\,]+\b(?!,)/i).join("; ")]
puts "texto1.scan(/[\wÀ-ü.\,]+\b(?!\.)/i): %s" % [texto1.scan(/[\wÀ-ü.\,]+\b(?!\.)/i).join("; ")]

# Positive Lookbehind - Match apenas no que tem o que foi passado no grupo (?=) depois de
puts "texto2.scan(/(?<=super)[\wÀ-ü.\,]+/i): %s" % [texto2.scan(/(?<=super)[\wÀ-ü.\,]+/i).join("; ")]

# Negative Lookbehind - Match no que não tem o que foi passado no grupo (?!) depois de
puts "texto2.scan(/(?<!super)mercado/i): %s" % [texto2.scan(/(?<!super)mercado/i).join("; ")]
