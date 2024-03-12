function dividir (dividendo, divisor) {
    if (divisor === 0) {
        throw new Error('Divisão não pode ser igual a 0')
    }

    return dividendo / divisor
}

module.exports = dividir
