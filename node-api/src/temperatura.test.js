const fahrenheitToCelsius = require('./temperatura')

test('lança uma exceção se a temperatura estiver errada', () => {
    const result = fahrenheitToCelsius(40)
    expect(result).toBe(4.4)
})
