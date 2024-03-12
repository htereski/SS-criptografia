const email = require('./email')

test('Verifica se o email é válido', () => {
    const result = email('herbert@gmail.com')

    expect(result).toBe(true)
})
