function checkPassword (password) {
    if (
        /[a-z]/gm.test(password) &&
        /[A-Z]/gm.test(password) &&
        /[0-9]/gm.test(password) &&
        /[!@#$%*()_+^&{}}:;?.]/gm.test(password) &&
        password.length >= 8
    ) {
        return true
    }

    return false
}


module.exports = checkPassword