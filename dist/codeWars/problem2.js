"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseWords = reverseWords;
function reverseWords(str) {
    var _a;
    // your code here
    const data = (_a = str.split(" ")) === null || _a === void 0 ? void 0 : _a.map((s) => s.split('').reverse().join('')).join(' ');
    console.log("data", data);
    return "Go for it";
}
reverseWords("This is an example!");
