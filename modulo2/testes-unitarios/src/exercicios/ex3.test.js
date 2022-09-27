import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    test("Checa o array [1, 2 ,1]", () => {
        const duplicado = checaItensDuplicados([1, 2 ,1]);

        expect(duplicado).toEqual(true);
    });

    test("Checa o array ['a', 'a', 'b', 'c']", () => {
        const duplicado = checaItensDuplicados(["a", "a", "b", "c"]);

        expect(duplicado).toEqual(true);
    });

    test("Checa o array [5, 5, 3, 6, 5, 6]", () => {
        const duplicado = checaItensDuplicados([5, 5, 3, 6, 5, 6]);

        expect(duplicado).toEqual(true);
    });

    test("Checa o array []", () => {
        const duplicado = checaItensDuplicados([]);

        expect(duplicado).toEqual(false);
    });

    test("Checa o array [1]", () => {
        const duplicado = checaItensDuplicados([1]);

        expect(duplicado).toEqual(false);
    });

    test("Checa o array [1, 2, 3]", () => {
        const duplicado = checaItensDuplicados([1, 2, 3]);

        expect(duplicado).toEqual(false);
    });

    teste ("Checa o array ['f', 'd', 'e', 'f']", () => {
        const duplicado = checaItensDuplicados(["f", "d", "e", "f"]);

        expect(duplicado).toEqual(true);
    });
});
