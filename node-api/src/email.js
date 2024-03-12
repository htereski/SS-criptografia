function checkEmail (email) {
    let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/

    if (regex.test(email)) {
        return true
    }

    return false
}

module.exports = checkEmail
