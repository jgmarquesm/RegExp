package main

import (
	"bytes"
	"fmt"
	"regexp"
)

func main() {
	texto := "0, 1, 2, a, B, c, @, _, $, #, d, 3, E, f, 4, 5, !, %, 5"

	regex5, _ := regexp.Compile("5")
	regexLetras, _ := regexp.Compile("[a-f]")

	// Faz o mesmo que o RegExp.test() do JS
	fmt.Println(regex5.MatchString(texto))
	// Faz o mesmo que re.search(regex, str).group() do Python
	fmt.Println(regex5.FindString(texto))
	// Encontra todas as ocorrências da regex na string passada e recebe um limite de matches no segundo argumento.
	fmt.Println(regexLetras.FindAllString(texto, 20))
	// Encontra todas as ocorrências da regex na string passada e faz um replace pela segunda string passada.
	fmt.Println(regexLetras.ReplaceAllString(texto, "Achei"))
	// Aplica uma função em todas as ocorrências da regex na string passada.
	resultado := regexLetras.ReplaceAllFunc([]byte(texto), bytes.ToUpper)
	fmt.Println(string(resultado))
}
