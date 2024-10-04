import { describe, expect, test } from 'vitest'

/*
Escribir una funcion que al pasarle un número:
-Muestra "Tres" si es multiplo de 3.
-Muestra "Cinco" si es multiplo de 5.
-Muestra "TresCinco" si es multiplo de 3 y 5.
-Muestra el numero si no es multiplo de los anteriores
*/

const multiTresCinco = (number) => {
  if (typeof number !== 'number') throw new Error('El parametro proporcionado no valido')
  if (Number.isNaN(number)) throw new Error('El parametro proporcionado no valido debe ser un numero y no infinito. esta recibiendo: ' + number)
  if (number % 5 === 0 && number % 3 === 0) return 'TresCinco'
  if (number % 3 === 0) return 'Tres'
  if (number % 5 === 0) return 'Cinco'

  return number
}

describe('MultiTresCinco', () => {
  // Funcion para iniciar
  // test('Deberia se una función', () => {
  //   expect(typeof multiTresCinco).toBe('function')
  // })

  test('Deberia fallar si no proporciona un número para el parameto', () => {
    expect(() => multiTresCinco()).toThrow()
  })

  test('Deberia fallar si no proporciona un número para el parameto y mostrar mensaje de error', () => {
    expect(() => multiTresCinco()).toThrow('El parametro proporcionado no valido')
  })

  test('Deberia fallar si no proporciona un número para el parameto y mostrar mensaje de error y el tipo de variable', () => {
    expect(() => multiTresCinco(NaN)).toThrow('El parametro proporcionado no valido debe ser un numero y no infinito. esta recibiendo: ' + NaN)
  })

  test('Deberia devolver 1 si el número proporcionado es 1', () => {
    expect(multiTresCinco(1)).toBe(1)
  })

  test('Deberia devolver 2 si el número proporcionado es 2', () => {
    expect(multiTresCinco(2)).toBe(2)
  })
  // El caso que sigue lo tiene implicito
  // test('Deberia devolver "Tres" si el número proporcionado es 3', () => {
  //   expect(multiTresCinco(3)).toBe('Tres')
  // })

  test("Deberia devolver 'Tres' si el número proporcionado es multiplo de 3 ", () => {
    expect(multiTresCinco(6)).toBe('Tres')
    expect(multiTresCinco(9)).toBe('Tres')
    expect(multiTresCinco(12)).toBe('Tres')
  })
  test("Deberia devolver 'Cinco' si el número proporcionado es multiplo de 5 ", () => {
    expect(multiTresCinco(5)).toBe('Cinco')
    expect(multiTresCinco(10)).toBe('Cinco')
    expect(multiTresCinco(20)).toBe('Cinco')
  })
  test("Deberia devolver 'TresCinco' si el número proporcionado es multiplo de 3 y 5 ", () => {
    expect(multiTresCinco(15)).toBe('TresCinco')
    expect(multiTresCinco(30)).toBe('TresCinco')
    expect(multiTresCinco(45)).toBe('TresCinco')
  })
})