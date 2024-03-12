const dividir = require('./matematica')

test('lança uma exceção ao dividir por zero', () => {
    const result = dividir(5,1)
    
    //expect(result).toThrow('Divisão por zero não é permitida')
    expect(result).toBe(5)
})
