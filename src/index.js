module.exports = function check(str, bracketsConfig) {
    let brackets = [];
    let length = str.length;

    for (let i = 0; i < bracketsConfig.length; i++) {
        brackets.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
    }

    while (true) {
        for (let i = 0; i < brackets.length; i++) {
            str = str.replace(brackets[i], '');
        }
        if (str.length == 0) return true;

        if (length == str.length) return false;

        length = str.length;
    }
}
