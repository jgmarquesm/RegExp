import re

def main():
    texto = "0, 1, 2, a, B, c, @, _, $, #, d, 3, E, f, 4, 5, !, %, 5"
    
    regexCinco = re.compile("5")
    regexLetras = re.compile("[a-f]")
    
    match1 = re.search(regexCinco, texto)
    match1_group = match1.group()
    
    match2 = re.findall(regexLetras, texto)

    # Retorna a ocorrência encontrada no texto a partir da regex
    print(f"re.search(regex, str).group() -> re.search(regex5, texto).group(): {match1_group}")
    
    # Retorna todas as ocorrências encontradas no texto a partir da regex
    print(f"re.findall(regex, str) -> re.findall(regexLetras, texto): {match2}")
    

if __name__ == '__main__':
    main()