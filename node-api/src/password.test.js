const password = require('./password')

test('Verifica se a senha é válida', () => {
    const result = password('123hT@@@')
    expect(result).toBe(true)
})
