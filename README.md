# Resumo sobre Regex

## Flags

- g: global -> Faz o match em todas as ocorrências, não só na primeira.
- i: ignore case -> Ignora a diferença entre letras maiúsculas e minúsculas.
- m: multiline -> Percorre multiplas linhas procurando por ocorrências.

## Meta-Caracteres

### Representantes

- .: Ponto -> Substitui um caracter qualquer.
- []: Conjunto -> Representa conjunto de caracteres predefinidos.
- [^]: Conjunto negado -> Representa conjunto de caracteres proíbidos.

### Quantificadores

- ?: Opcional -> Zero ou um.
- *: Asterisco -> Zero ou mais.
- +: Mais -> Um ou mais.
- {n}: Intervalo exato -> n valores.
- {n,m}: Chaves -> De n até m.

Existem 2 formas de usar os quantificadores: Greedy e Lazy.

- Greedy: Pega o máximo de caractéres possível na string passada.
- Lazy: Pega o minímo de caractéres possível na string passada.

### Âncoras/ Bordas

- ^: Circunflexo -> Início de linha.
- $: Cifrão -> Fim de linha.
- \b: Borda -> Início ou fim de palavra/frase/padrão.

### Outros

- \: Barra -> Escape (Permite usar o valor literal de metacaracteres)
- |: OU: -> Operação booleana OR.
- (): Grupo -> .
- \1...\9: Retrovisor -> Resgata grupos já definidos.

## Shorthands

- \w: Agrupa letras, números e o underline -> [0-9A-Za-z_]
- \d: Agrupa os valores númericos -> [0-9]
- \s: Espaços em branco -> [\n\t \r\f]
- \b: Borda de palavras

### Negados

- \W: Oposto do \w -> [^0-9A-Za-z_]
- \D: Oposto de \d -> [^0-9]
- \S: Opsto de \s -> [^\n\t \r\f]
- \B: Oposto de \b

## Grupos

São definidos usando () e podemos usá-los de várias maneiras, inclusive é possível deixá-los opcionais.
Usando Grupos temos acesso aos **Retrovisores**.
Quando se executa uma RegEx com grupos, os matches são guardados e podem ser reutilizados com os
retorvisores.
Para ter acesso ao valor guardado se referencia ao grupo ao qual faz parte, usando a seguinte sintaxe:

`texto = "</b>Exemplo</b><div>Outro Exemplo</div>"`

`regex = (<\w+>).*(\1)(grupo2)\.\.\.(\2)`

Sempre que se quiser acessar ao valor guardado do match do grupo se usa o \n onde n é número do grupo,
no exemplo acima é o 1 e o 2, pois queremos pegar o valor do primeiro e segundo grupo, respectivamente,
da regex.

É possível não salvar os valores de match de um grupo usando a seguinte definição (?:). Exemplo:

`texto = "</b>Exemplo</b><div>Outro Exemplo</div>"`

`regex = (<\w+>).*(\1)(?:grupo2)\.\.\.(\2)`

Nesse caso, não poderesmo acessar o valor do \2 pois não foi salvo e então teremos um erro.
Por padrão a maioria das LPs suportam até 9 grupos por regex. JS suporta mais que isso.

### Retrovisores

Retorvisores referenciam valores de match dos grupos, como dito acima, esses valores são guardados
durante a execução.

### Grupos Especiais

- (?=string):  Positive Lookahead  -> Match, apenas no que tem o que foi passado no grupo (?=string),
antes da string.
- (?!string):  Negative Lookahead  -> Match, no que não tem o que foi passado no grupo (?!string), antes
da string.
- (?<=string): Positive Lookbehind -> Match, apenas no que tem o que foi passado no grupo (?=string),
depois da string.
- (?<!string): Negative Lookbehind -> Match, no que não tem o que foi passado no grupo (?!string),
depois da string.
