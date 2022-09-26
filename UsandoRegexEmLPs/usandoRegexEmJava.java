package UsandoRegexEmLPs;
import java.util.regex.*;

public class usandoRegexEmJava {
    public static void main(String[] args) {
        String texto = "0, 1, 2, a, B, c, @, _, $, #, d, 3, E, f, 4, 5, !, %, 5";
        Pattern regexLetras = Pattern.compile("[a-f]");
        Matcher matcher = regexLetras.matcher(texto);

        while (matcher.find()){
            System.out.printf("Pattern.compile(regex).matcher(String).group() -> Pattern.compile(\"[a-f]\").matcher(texto).group(): %s%n", matcher.group());
        }

        System.out.printf("String.replaceAll(regex, replacement) -> texto.replaceAll(\"[0-5]\", \"Achei\"): %s%n", texto.replaceAll("[0-5]", "Achei"));
    }
}