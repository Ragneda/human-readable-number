module.exports = function toReadable(number) {
    let str = String(number);
    let str2 = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "0" && str.length === 1) {
            return "zero";
        }
        if (str[i] === "1" && str.length === 1) {
            return "one";
        }
        if (str[i] === "2" && str.length === 1) {
            return "two";
        }
        if (str[i] === "3" && str.length === 1) {
            return "three";
        }
        if (str[i] === "4" && str.length === 1) {
            return "four";
        }
        if (str[i] === "5" && str.length === 1) {
            return "five";
        }
        if (str[i] === "6" && str.length === 1) {
            return "six";
        }
        if (str[i] === "7" && str.length === 1) {
            return "seven";
        }
        if (str[i] === "8" && str.length === 1) {
            return "eigh";
        }
        if (str[i] === "9" && str.length === 1) {
            return "nine";
        }
        if (str[i] === "10" && str.length === 2) {
            return "ten";
        }
        if (str[i] === "11" && str.length === 2) {
            return "eleven";
        }
        if (str[i] === "12" && str.length === 2) {
            return "twelve";
        }
        if (str[i] === "13" && str.length === 2) {
            return "thirteen";
        }
        if (str[i] === "14" && str.length === 2) {
            return "fourteen";
        }
        if (str[i] === "15" && str.length === 2) {
            return "fifteen";
        }
        if (str[i] === "16" && str.length === 2) {
            return "sixteen";
        }
        if (str[i] === "17" && str.length === 2) {
            return "seventeen";
        }
        if (str[i] === "18" && str.length === 2) {
            return "eighteen";
        }
        if (str[i] === "19" && str.length === 2) {
            return "nineteen";
        }
        if (str[i] === "20" && str.length === 2) {
            return "twenty";
        }
        return (str2 += str[i]);
    }
};
