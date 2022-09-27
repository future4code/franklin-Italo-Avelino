import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  test("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");

    expect(ehPalindromo).toEqual(true);
  });

  test("retorna true para 'asa'", () => {
    const ehPalindromo = checaPalindromo("asa");

    expect(ehPalindromo).toEqual(true);
  });

  test("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim")

    expect(ehPalindromo).toEqual(true);
  });

  test("retorna true para 'arara'", () => {
    const ehPalindromo = checaPalindromo("arara")

    expect(ehPalindromo).toEqual(true);
  });

  test("retorna true para 'Socorram-me subi no onibus em marrocos'", () => {
    const ehPalindromo = checaPalindromo("Socorram-me subi no onibus em marrocos")

    expect(ehPalindromo).toEqual(true);
  });

  test("retorna true para 'Arara'", () => {
    const ehPalindromo = checaPalindromo("Arara")

    expect(ehPalindromo).toEqual(true);
  });
});
