function fahrenheitToCelsius (temp) {
    let res = (temp - 32) / 1.8
    return parseFloat(res.toFixed(1))
}

module.exports = fahrenheitToCelsius
