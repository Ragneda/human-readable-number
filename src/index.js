module.exports = function toReadable(number) {
    let str = String(number);
    let str2 = "";
    for (let i = 0; i < str.length; i++) {
        return (str2 += str[i]);
    }

    if (str2 === "0" && str2.length === 1) {
        return "zero";
    }
    if (str2 === "1" && str2.length === 1) {
        return "one";
    }
    if (str2 === "2" && str2.length === 1) {
        return "two";
    }
    if (str2 === "3" && str2.length === 1) {
        return "three";
    }
    if (str2 === "4" && str2.length === 1) {
        return "four";
    }
    if (str2 === "5" && str2.length === 1) {
        return "five";
    }
    if (str2 === "6" && str2.length === 1) {
        return "six";
    }
    if (str2 === "7" && str2.length === 1) {
        return "seven";
    }
    if (str2 === "8" && str2.length === 1) {
        return "eigh";
    }
    if (str2 === "9" && str2.length === 1) {
        return "nine";
    }
    if (str2 === "10" && str2.length == 2) {
        return "ten";
    }
    if (str2 === "11" && str2.length == 2) {
        return "eleven";
    }
    if (str2 === "12" && str2.length == 2) {
        return "twelve";
    }
    if (str2 === "13" && str2.length == 2) {
        return "thirteen";
    }
    if (str2 === "14" && str2.length == 2) {
        return "fourteen";
    }
    if (str2 === "15" && str2.length == 2) {
        return "fifteen";
    }
    if (str2 === "16" && str2.length === 2) {
        return "sixteen";
    }
    if (str2 === "17" && str2.length === 2) {
        return "seventeen";
    }
    if (str2 === "18" && str2.length === 2) {
        return "eighteen";
    }
    if (str2 === "19" && str2.length === 2) {
        return "nineteen";
    }
    if (str2 === "20" && str2.length === 2) {
        return "twenty";
    }
};

