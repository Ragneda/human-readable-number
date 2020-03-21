module.exports = function toReadable(number) {
    let str = String(number);
    let str2 = "";
    for (let i = 0; (i = 1); i++) {
        if (str[i] === "0") {
            return "zero";
        }
        if (str[i] === "1") {
            return "one";
        }
        if (str[i] === "2") {
            return "two";
        }
        if (str[i] === "3") {
            return "three";
        }
        if (str[i] === "4") {
            return "four";
        }
        if (str[i] === "5") {
            return "five";
        }
        if (str[i] === "6") {
            return "six";
        }
        if (str[i] === "7") {
            return "seven";
        }
        if (str[i] === "8") {
            return "eigh";
        }
        if (str[i] === "9") {
            return "nine";
        }
        return (str2 += str[i]);
    }

    for (let i = 0; (i = 2); i++) {
        if (str[i] === "10") {
            return "ten";
        }
        if (str[i] === "11") {
            return "eleven";
        }
        if (str[i] === "12") {
            return "twelve";
        }
        if (str[i] === "13") {
            return "thirteen";
        }
        if (str[i] === "14") {
            return "fourteen";
        }
        if (str[i] === "15") {
            return "fifteen";
        }
        if (str[i] === "16") {
            return "sixteen";
        }
        if (str[i] === "17") {
            return "seventeen";
        }
        if (str[i] === "18") {
            return "eighteen";
        }
        if (str[i] === "19") {
            return "nineteen";
        }
        if (str[i] === "20") {
            return "twenty";
        }
        return (str2 += str[i]);
    }
};
