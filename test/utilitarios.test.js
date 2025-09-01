const Utilitarios = require("../src/utilitarios");

describe('Testes da classe Utilitarios', () => {
    let utilitario;

    beforeEach(() => {
        utilitario = new Utilitarios();
    });

    test("Inverter strings", async () => {
        expect(utilitario.inverterString("ABCDE")).toStrictEqual("EDCBA");
        expect(utilitario.inverterString("EDCBA")).toStrictEqual("ABCDE");
    });

    test("Contar Caracteres", async () => {
        expect(utilitario.contarCaracteres("ABCDE")).toStrictEqual(5);
        expect(utilitario.contarCaracteres("thiagolarangeira")).toStrictEqual(16);
    });

    test("Transformar strings para Maiuscula", async () => {
        expect(utilitario.paraMaiusculas("abcde")).toStrictEqual("ABCDE");
        expect(utilitario.paraMaiusculas("thiagoLarangeira")).toStrictEqual("THIAGOLARANGEIRA");
    });

    test("Transformar strings para Minusculas", async () => {
        expect(utilitario.paraMinusculas("ABCDE")).toStrictEqual("abcde");
        expect(utilitario.paraMinusculas("THIAGOLARANGEIRA")).toStrictEqual("thiagolarangeira");
    });

    test("Transformar apenas primeira letra maiuscula", () => {
        expect(utilitario.primeiraLetraMaiuscula("teste")).toStrictEqual("Teste");
        expect(utilitario.primeiraLetraMaiuscula("a")).toStrictEqual("A");
    });

    test("somar", () => {
        expect(utilitario.somar(2, 3)).toStrictEqual(5);
        expect(utilitario.somar(-1, 1)).toStrictEqual(0);
    });

    test("subtrair", () => {
        expect(utilitario.subtrair(10, 5)).toStrictEqual(5);
        expect(utilitario.subtrair(0, 7)).toStrictEqual(-7);
    });

    test("multiplicar", () => {
        expect(utilitario.multiplicar(3, 4)).toStrictEqual(12);
        expect(utilitario.multiplicar(-2, 3)).toStrictEqual(-6);
    });

    test("dividir", () => {
        expect(utilitario.dividir(10, 2)).toStrictEqual(5);
        expect(() => utilitario.dividir(4, 0)).toThrow("Divisão por zero");
    });

    test("Verificar se é par", () => {
        expect(utilitario.ehPar(4)).toStrictEqual(true);
        expect(utilitario.ehPar(7)).toStrictEqual(false);
    });

    test("Retornar primeiro elemento de lista", () => {
        expect(utilitario.primeiroElemento([1, 2, 3])).toStrictEqual(1);
        expect(utilitario.primeiroElemento(["a", "b"])).toStrictEqual("a");
    });

    test("Retornar ultimo elemento de lista", () => {
        expect(utilitario.ultimoElemento([1, 2, 3])).toStrictEqual(3);
        expect(utilitario.ultimoElemento(["x", "y"])).toStrictEqual("y");
    });

    test("Retornar tamanho do array", () => {
        expect(utilitario.tamanhoArray([1, 2, 3])).toStrictEqual(3);
        expect(utilitario.tamanhoArray([])).toStrictEqual(0);
    });

    test("Ordenar array alfabeticamente", () => {
        expect(utilitario.ordenarArray([3, 1, 2])).toStrictEqual([1, 2, 3]);
        expect(utilitario.ordenarArray(["b", "a"])).toStrictEqual(["a", "b"]);
    });

    test("Inverter ordem do array", () => {
        expect(utilitario.inverterArray([1, 2, 3])).toStrictEqual([3, 2, 1]);
        expect(utilitario.inverterArray(["a", "b"])).toStrictEqual(["b", "a"]);
    });

    test("Gerar numero aleatorio de 0 até variavel", () => {
        let numero = utilitario.gerarNumeroAleatorio(10);
        expect(numero).toBeGreaterThanOrEqual(0);
        expect(numero).toBeLessThan(10);
    });

    test("Validar se o tipo da variavel é numero", () => {
        expect(utilitario.ehNumero(5)).toStrictEqual(true);
        expect(utilitario.ehNumero("5")).toStrictEqual(false);
    });

    test("Remover espaços de string", () => {
        expect(utilitario.removerEspacos("  teste ")).toStrictEqual("teste");
        expect(utilitario.removerEspacos("\t abc \n")).toStrictEqual("abc");
    });

    test("Repetir o texto da string por x vezes", () => {
        expect(utilitario.repetirTexto("ab", 3)).toStrictEqual("ababab");
        expect(utilitario.repetirTexto("x", 0)).toStrictEqual("");
    });

    test("Juntar array em unica string, usando x como separador", () => {
        expect(utilitario.juntarArray(["a", "b", "c"])).toStrictEqual("a,b,c");
        expect(utilitario.juntarArray(["a", "b"], "-")).toStrictEqual("a-b");
    });

    test("Contar Palavras por espaço", () => {
        expect(utilitario.contarPalavras("Olá mundo")).toStrictEqual(2);
        expect(utilitario.contarPalavras("  Espaços   extras   ")).toStrictEqual(2);
    });

    test("Media dos numero do array", () => {
        expect(utilitario.mediaArray([2, 4, 6])).toStrictEqual(4);
        expect(utilitario.mediaArray([])).toStrictEqual(0);
    });

    test("Remover items duplicados do array", () => {
        expect(utilitario.removerDuplicados([1, 2, 2, 3])).toStrictEqual([1, 2, 3]);
        expect(utilitario.removerDuplicados(["a", "a", "b"])).toStrictEqual(["a", "b"]);
    });

    test("checar se a string é palindromo", () => {
        expect(utilitario.ehPalindromo("arara")).toStrictEqual(true);
        expect(utilitario.ehPalindromo("Não é")).toStrictEqual(false);
    });

    test("Mesclar objetos em um só", () => {
        expect(utilitario.mesclarObjetos({ a: 1 }, { b: 2 })).toStrictEqual({ a: 1, b: 2 });
        expect(utilitario.mesclarObjetos({ a: 1 }, { a: 2, b: 3 })).toStrictEqual({ a: 2, b: 3 });
    });
});