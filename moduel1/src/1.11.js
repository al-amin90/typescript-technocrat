"use strict";
var _a, _b;
{
    const age = 23;
    const result = 18 < age ? "Adult" : "Sisu";
    const result21 = 18 > age ? "baby" : "Adult";
    console.log(result, result21);
    //nullish coalescing operator
    //null / undefine ===> decision making
    const isAuthenticated = "";
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    const result2 = isAuthenticated ? isAuthenticated : "guest";
    const user = {
        name: "Al Amin Parvez",
        address: {
            city: "kushtia",
            road: "Katai kana Mor",
            presentAddress: "Bheramara Kushtia",
        }
    };
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "Noo Permanant add avilable";
    console.log({ permanentAddress });
}
