module.exports = function toReadable(number) {
    let str = String(number);

    let x = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine"
    ];
    let a = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    ];

    let b = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
    ];

    let y = [
        "one hundred",
        "two hundred",
        "three hundred",
        "four hundred",
        "five hundred",
        "six hundred",
        "seven hundred",
        "eight hundred",
        "nine hundred"
    ];

    if (str.length === 1) {
        return x[number];
    }

    if (str.length === 2 && number < 20) {
        return a[number - 10];
    }

    if (str.length === 2 && number > 19) {
        return b[number / 10 - 2];
    }

    if (
        (str.length === 2 && number == 20) ||
        number == 30 ||
        number == 40 ||
        number == 50 ||
        number == 60 ||
        number == 70 ||
        number == 80 ||
        number == 90
    ) {
        return b[number / 10 - 2];
    }

    if (
        (str.length === 2 && number > 20 && number != 30) ||
        number != 40 ||
        number != 50 ||
        number != 60 ||
        number != 70 ||
        number != 80 ||
        number != 90
    ) {
        return b[str[0] - 2] + " " + x[str[1]];
    }

    if (str.length === 3 && str[2] == 0 && str[1] == 0) {
        return y[str[0] - 1];
    }

    if (str.length === 3 && str[1] != 0 && str[1] == 1) {
        return y[str[0] - 1] + " " + a[str[2]];
    }

    if (str.length === 3 && str[2] == 0 && str[1] > 1) {
        return y[str[0] - 1] + " " + b[str[1] - 2];
    }

    if (str.length === 3 && str[1] == 0 && str[2] != 0) {
        return y[str[0] - 1] + " " + x[str[2]];
    }

    if (str.length === 3 && str[2] != 0 && str[1] != 0 && str[1] > 1) {
        return y[str[0] - 1] + " " + b[str[1] - 2] + " " + x[str[2]];
    }
};
