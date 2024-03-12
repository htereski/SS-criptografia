const helloWorld = require('./helloWorld')

test('should return "Hello, World!"', () => {
    const result = helloWorld()

    expect(result).toBe('Hello, World!')
})
